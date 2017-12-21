'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import * as firebase from 'firebase';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pun: 'pun',
            answer: 'answer'
        }

        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            pun: 'butts',
            answer: 'funny'
        })
    }

    render() {
        return (
            <div className='app'>
                <Pun text={ this.state.pun } />
                <Answer text={ this.state.answer } />
                <Button text='Click Me!' onClick={ this.update } />
            </div>
        )
    }
}

const Pun = ({ text }) => <h1 className='pun'>{ text }</h1>
const Answer = ({ text }) => <p className='answer'>{ text }</p>

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='button' onClick={ this.props.onClick }>{ this.props.text }</button>
        )
    }
}

export default App
