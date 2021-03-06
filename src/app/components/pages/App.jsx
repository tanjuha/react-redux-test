import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';

import Navbar from "../navbar";
import rootReducers from "../../reducers/index";
import Home from "../home";
import rootSaga from '../../sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);


function App() {
    return (
        <Provider store={store}>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;