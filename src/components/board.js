import React, {Component} from 'react';
import { NUM_ROWS, NUM_COLUMNS } from '../constants';



export default class Board extends Component {

    render() {

        let board = [];

        for (let x = 0; x < NUM_ROWS; x++) {
            board[x] = [];
            for (let y = 0; y < NUM_COLUMNS; y++) {
                board[x][y] = '';
            }
        }

        return (
            <div className="board">
                {
                    board.map((row, rowIndex) => {
                        return (
                            <div className="row" key={rowIndex}>
                                {
                                    row.map((cell, cellIndex) => <div className="cell" key={cellIndex} />)
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}










