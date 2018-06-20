import {combineReducers} from 'redux';
import directionReducer from './direction';

const rootReducer = combineReducers({
    direction: directionReducer
});

export default rootReducer;