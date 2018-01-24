'use strict';

var styles = require('./index.scss');

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';

import * as firebase from 'firebase';

import reducers from './reducers';
import App from './App';

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
firebase.initializeApp(config);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
    });
}

else if (process.env.NODE_ENV === 'production' ) {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}

const history = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(routerMiddleware(history)));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
document.getElementById('root'));
