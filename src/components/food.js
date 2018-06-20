import React, {Component} from 'react';
import { SQUARE_SIZE } from '../constants';



export default class Food extends Component {

    render() {
        let style = {
            // left: props.coords[0] * SQUARE_SIZE + 'px',
            // top: props.coords[1] * SQUARE_SIZE + 'px'
        };
        return (
            <div className="food" style={style}></div>
        );
    }
}