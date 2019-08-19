import {all, fork, call, put, takeEvery} from 'redux-saga/effects';
import {REQUEST_GET_HOTELS, RECEIVE_GET_HOTELS} from '../constans/action-types';

import {getHotels} from '../../api/hotel-api';


function* workerGetHotels(action){
    try {
        const response = yield call(getHotels);
        yield put({type: RECEIVE_GET_HOTELS, payload: response.data});
    } catch (e){
        console.log(e);
    }
}

export function* watcherGetHotels() {
    yield takeEvery(REQUEST_GET_HOTELS, workerGetHotels)
}