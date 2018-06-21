import React, {Component} from 'react';
import { SQUARE_SIZE } from '../constants/index';

export default class Snake extends Component {

    render() {
        return (
            <div>
                {
                    this.props.coords.map((coords, index) => {
                        const style = {
                            left: coords[0] * SQUARE_SIZE + 'px',
                            top: coords[1] * SQUARE_SIZE + 'px',
                            background: this.props.lost ? 'red' : ''
                        };
                        return <div className="snake" style={style} key={index} />
                    })
                }
            </div>
        );
    }
}