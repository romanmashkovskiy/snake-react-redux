import React, {Component} from 'react';


export default class Score extends Component {

    render() {

        return (
            <div className="score">
                <h2>SCORE: {this.props.score}</h2>
            </div>
        );
    }
}