import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import AsyncApp from './components/AsyncApp';
import TestingRouter from './components/TestingRouter';
import app from './reducers/app';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

let store = createStore(
    app,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AsyncApp}/>
                <Route path="/router" component={TestingRouter}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);