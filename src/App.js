'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import * as firebase from 'firebase';

const App = ({ }) => {
    return (
        <div className='app'>
            <Pun text='pun'/>
            <Answer text='answer'/>
            <Button text='Click Me!'/>
        </div>
    )
}

const Pun = ({ text }) => <h1 className='pun'>{ text }</h1>
const Answer = ({ text }) => <p className='answer'>{ text }</p>
const Button = ({ text }) => {
    const onClick = () => {
        console.log(1);
    }

    return (
        <button className='button' onclick={ onClick }>{ text }</button>
    )
}


export default App
