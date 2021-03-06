import React from 'react';
import * as serviceWorker from './serviceWorker';
import { LOGIN_SUCCESS} from "./store/auth/actionTypes";
import reducer from "./store/combinedReducer";
import {createStore, compose, applyMiddleware} from 'redux';
import setAuthorizationToken from "./authorization";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk, logger)
));

// when the page reloads, the auth user is still set
if (localStorage.token){
    setAuthorizationToken(localStorage.token)
    let userData = localStorage.getItem('user_data') == null ? null : JSON.parse(localStorage.getItem('user_data'));
    store.dispatch({ type: LOGIN_SUCCESS, payload: userData}) //provided he has a valid token

}
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
