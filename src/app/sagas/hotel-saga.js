import {all, fork, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {REQUEST_GET_HOTELS} from '../constans/action-types';

import {getHotels} from '../services/hotel-service';
import {receiveGetHotels} from '../actions/hotel-action';


function* workerGetHotels(action){
    try {
        const data = yield call(getHotels);
        yield put(receiveGetHotels(data));
    } catch (e){
        console.log(e);
    }
}

export function* watcherGetHotels() {
    yield takeLatest(REQUEST_GET_HOTELS, workerGetHotels)
}