import {REQUEST_GET_HOTELS, RECEIVE_GET_HOTELS } from '../app/constans/action-types';

export const requestGetHotels = () => ({type: REQUEST_GET_HOTELS});
export const receiveGetHotels = (data) => ({type: RECEIVE_GET_HOTELS, payload: data});