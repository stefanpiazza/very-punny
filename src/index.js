'use strict';

var styles = require('./index.scss');

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
firebase.initializeApp(config);

import App from './App'

render(<App />, document.getElementById('root'))
