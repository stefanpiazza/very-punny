import App from './src/App';
import express from 'express';
import firebase from 'firebase';
import path from 'path';
import React from 'react';
import reducers from './src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
firebase.initializeApp(config);

const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.send(`
        <!doctype html>
        <html>
            <head>
                <title></title>
                <link rel='stylesheet' href='static/styles/app.css'>
            </head>
            <body>
                <div id='root'>${renderToString(
                    <Provider store={createStore(reducers)}>
                        <StaticRouter location={req.url} context={{}}>
                            <App />
                        </StaticRouter>
                    </Provider>
                )}</div>
                <script src='static/scripts/common.js'></script>
                <script src='static/scripts/app.js'></script>
            </body>
        </html>
    `)
});

app.listen(3000, '0.0.0.0', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info('Listening at http://localhost:3000');
    }
});