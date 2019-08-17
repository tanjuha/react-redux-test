import {all, fork} from 'redux-saga/effects';

import {watcherGetHotels} from './hotel-saga';


export default function* rootSaga(){
    yield all([
        fork(watcherGetHotels)
    ])
}