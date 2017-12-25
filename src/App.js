'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import * as firebase from 'firebase';

const punList = [
    {
        pun: 'butts',
        answer: 'more butts'
    },
    {
        pun: 'butts1',
        answer: 'more butts1'
    },
    {
        pun: 'butts2',
        answer: 'more butts2'
    }
]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            pun: punList[0]['pun'],
            answer: punList[0]['answer']
        }

        this.update = this.update.bind(this);
    }

    componentWillMount() {

    }

    update() {
        let filteredPunList = punList.filter(pun => punList.indexOf(pun) !== this.state.currentIndex);
        let punIndex = Math.floor(Math.random() * filteredPunList.length);
        let pun = filteredPunList[punIndex];
        
        this.setState({ currentIndex: punList.indexOf(pun) })
        this.setState({
            pun: pun['pun'],
            answer: pun['answer']
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

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default App
