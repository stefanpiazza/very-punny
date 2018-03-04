import * as functions from 'firebase-functions';
import App from './src/App';
import express from 'express';
import firebase from 'firebase';
import fs from 'fs';
import path from 'path';
import React from 'react';
import reducers from './src/reducers';
import { addPun } from './src/actions';
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

const index = fs.readFileSync(path.resolve(__dirname, 'dist/ssr-index.html'), 'utf-8');
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
    const db = firebase.database();
    const dbRef = db.ref();
    const punsRef = dbRef.child('puns');
    punsRef.once('value').then((snap) => {
        let puns = snap.val();
        let pun = puns[Math.floor(Math.random() * puns.length)];

        const preloadedState = { user: {"isLoggedIn": false}, puns: puns, pun: pun }
        const store = createStore(reducers, preloadedState);

        const reactApp = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>)

        const reduxState = `
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
            </script>            
        `;

        const finalHtml = index.replace('<!-- ::React:: -->', reactApp).replace('<!-- ::Redux:: -->', reduxState);

        res.send(finalHtml);
    })
});

app.listen(3001, '0.0.0.0', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info('Listening at http://localhost:3001');
    }
});

export let ssrapp = functions.https.onRequest(app);