import * as actions from '../actions/action-types';

const INITIAL_STATE = {
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
        default: return state;
    }
}