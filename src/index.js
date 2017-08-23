import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import AsyncApp from './components/AsyncApp';
import app from './reducers/app';
import thunkMiddleware from 'redux-thunk'

let store = createStore(
    app,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <AsyncApp />
    </Provider>,
    document.getElementById('root')
);