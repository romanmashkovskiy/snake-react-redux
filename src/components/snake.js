import React, {Component} from 'react';
import { SQUARE_SIZE } from '../constants';



export default class Snake extends Component {

    render() {
        let style = {
            // left: props.coords[0] * SQUARE_SIZE + 'px',
            // top: props.coords[1] * SQUARE_SIZE + 'px'
        };
        return (
            <div>
                {
                    props.coords.map((coords, index) => {
                        const style = {
                            // left: coords[0] * SQUARE_SIZE + 'px',
                            // top: coords[1] * SQUARE_SIZE + 'px',
                            // background: props.lost ? 'red' : ''
                        };
                        return <div className="snake" style={style} key={index} />
                    })
                }
            </div>
        );
    }
}