'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import * as firebase from 'firebase';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pun: ""
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('puns');
        // const punRef = rootRef.child('pun');

        rootRef.on('value', (snap) => {
            this.setState({
                // pun: snap.val()['pun 1']
            })
        })
    }

    render() {
        return (
            <div className='app'>
                <h1 className='pun-title'>{ this.state.pun }</h1>
            </div>
        );
    }
}

export default App
