import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setDirection } from './actions/index';
import './App.css';
import Board from './components/board';
import Food from './components/food';
import Score from './components/score'
// import Snake from "./components/snake";

class App extends Component {
    constructor(props) {
        super(props);
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

    }

    checkFoodCollision() {

    }

    resetGame() {

    }

    generateNewFood() {

    }

    setControls() {
        document.addEventListener('keydown',e => {
            switch (e.keyCode) {
                case 37:
                    this.props.setDirection('left');
                    break;
                case 39:
                    this.props.setDirection('right');
                    break;
                case 40:
                    this.props.setDirection('down');
                    break;
                case 38:
                    this.props.setDirection('up');
                    break;
            }

        })
    }




    render() {
        return (
            <div>
                <Board/>
            </div>
        );
    }


}

function mapStateToProps (state) {
    return {

    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
            setDirection: setDirection
        },
        dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(App);
