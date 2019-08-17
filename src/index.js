import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware} from 'redux';

import App from './app/components/App.jsx';
import rootSaga from './app/sagas/index';
import rootReducers from './app/reducers/index';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

render(
<Provider store = {store}>
    <App/>
</Provider> ,
 document.getElementById('root')
 );