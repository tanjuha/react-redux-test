import {RECEIVE_GET_HOTELS} from '../constans/action-types';

const initialState = {
    listUsers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_GET_HOTELS: 
            return {
                ...state,
                listUsers: action.payload
            }
        default:
            return state
    }
}