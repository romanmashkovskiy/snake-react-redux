import * as actions from './action-types';

export const setDirection = (direction) => {
    return {
        type: actions.SET_DIRECTION,
        payload: direction
    }
};