import {combineReducers} from 'redux';
import hotels from './hotels';

const rootReducers = combineReducers({
    hotels: hotels
})

export default rootReducers;