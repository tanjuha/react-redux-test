import {RECEIVE_GET_HOTELS} from '../constans/action-types';

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_GET_HOTELS: 
            return action.data;
        default:
            return state
    }
}