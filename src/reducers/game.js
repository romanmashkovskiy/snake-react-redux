import * as actions from '../actions/action-types';
import { INITIAL_GAME_SPEED } from '../constants/index';

const INITIAL_STATE = {
    speed: INITIAL_GAME_SPEED,
    lost: false,
    score: 0
};

export default function gameReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case actions.LOSE_GAME:
            return {
                ...state,
                lost: true
            };
        case actions.NEW_GAME:
            return {
                ...state,
                score: 0,
                lost: false
            };
        case actions.INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + 1
            };
        case actions.INCREASE_SPEED:
            return {
                ...state,
                speed: Math.floor(INITIAL_GAME_SPEED/(INITIAL_GAME_SPEED + 100*action.payload) * INITIAL_GAME_SPEED)
            };
        default: return state;
    }
}