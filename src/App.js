import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setDirection, loseGame, incrementScore, prependSnake, newGame, setFood, moveSnake } from './actions/index';
import './App.css';
import Board from './components/board';
import Food from './components/food';
import Score from './components/score'
import { NUM_COLUMNS, NUM_ROWS, GAME_SPEED } from './constants/index';
import Snake from "./components/snake";
import checkCollision from './utils/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.checkGameLoss = this.checkGameLoss.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    componentWillMount() {
        this.setControls();
        this.generateNewFood();
    }

    componentDidUpdate() {
        this.checkFoodCollision();
        this.checkGameLoss();
    }

    checkGameLoss() {
        const snakeCoords = this.props.snake.coords;
        const snakeHeadCoords = snakeCoords[snakeCoords.length-1];

        if (!this.props.game.lost && (
            snakeHeadCoords[0] === -1 ||
            snakeHeadCoords[0] === NUM_COLUMNS ||
            snakeHeadCoords[1] === -1 ||
            snakeHeadCoords[1] === NUM_ROWS ||
                checkCollision(snakeHeadCoords, snakeCoords.slice(0, -1)))) {
            clearInterval(this.snakeInterval);
            this.props.loseGame();
        }
    }

    checkFoodCollision() {
        const snakeCoords = this.props.snake.coords;
        const snakeHeadCoords = snakeCoords[snakeCoords.length-1];
        const foodCoords = this.props.food;
        if(snakeHeadCoords[0] === foodCoords[0] && snakeHeadCoords[1] === foodCoords[1]) {
            this.generateNewFood();
            this.props.incrementScore();
            this.props.prependSnake(snakeCoords[snakeCoords.length-1].slice());
        }
    }

    resetGame() {
        this.props.newGame();
        this.generateNewFood();
        clearInterval(this.snakeInterval);
        this.props.setDirection('down');
    }

    generateNewFood() {
        const x = Math.floor(Math.random() * NUM_COLUMNS);
        const y = Math.floor(Math.random() * NUM_ROWS);
        if (checkCollision([x, y], this.props.snake.coords)) this.generateNewFood()
        else this.props.setFood([x, y]);
    }

    setControls() {
        document.addEventListener('keydown',e => {
            const coords = this.props.snake.coords;
            const x = coords[coords.length-1][0];
            const y = coords[coords.length-1][1];

            switch (e.keyCode) {
                case 37:
                    if (this.props.snake.direction !== 'right' && x !== 0)
                    this.props.setDirection('left');
                    break;
                case 39:
                    if (this.props.snake.direction !== 'left' && x !== NUM_COLUMNS - 1)
                    this.props.setDirection('right');
                    break;
                case 40:
                    if (this.props.snake.direction !== 'up' && y !== NUM_ROWS - 1)
                    this.props.setDirection('down');
                    break;
                case 38:
                    if (this.props.snake.direction !== 'down' && y !== 0)
                    this.props.setDirection('up');
                    break;
                case 32:
                    if(this.props.game.lost) return false;
                    clearInterval(this.snakeInterval);
                    this.snakeInterval = setInterval(() => {
                        this.props.setDirection(this.props.snake.direction);
                        this.props.moveSnake(this.props.snake);
                    }, GAME_SPEED);
                    break;
            }
        })
    }


    render() {
        return (
            <div>
                <Score score={this.props.game.score}/>
                <div className="board-wrapper">
                <Board/>
                <Snake coords={this.props.snake.coords} lost={this.props.game.lost} />
                <Food coords={this.props.food}/>
                {this.props.game.lost && <button onClick={this.resetGame} className="reset">Reset</button>}
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        snake: state.snake,
        game: state.game,
        food: state.food
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
            setDirection: setDirection,
            loseGame: loseGame,
            incrementScore: incrementScore,
            prependSnake: prependSnake,
            newGame: newGame,
            setFood: setFood,
            moveSnake: moveSnake
        },
        dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(App);
