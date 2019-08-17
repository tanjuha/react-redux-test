import {combineReducers} from 'redux';
import user from './hotels';

const rootReducers = combineReducers({
    user: user
})

export default rootReducers;