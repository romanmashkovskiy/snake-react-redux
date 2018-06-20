import * as actions from '../actions/action-types';

export default function directionReducer (state = 'down', action) {
    switch(action.type) {
        case actions.SET_DIRECTION:
            return action.payload;
        default:
            return state;
    }
}