import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App';
import Menu from './components/Menu';
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
                <Route exact path="/" component={App}/>
                <Route path="/menu" component={Menu}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);