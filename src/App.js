'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import * as firebase from 'firebase';

import Button from './components/Button/Button';
import Pun from './components/Pun/Pun';

const data = require('./data.json');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            pun: data[0]
        }

        this.update = this.update.bind(this);
    }

    componentWillMount() {

    }

    update() {
        let filteredData = data.filter(item => data.indexOf(item) !== this.state.currentIndex);
        let dataIndex = Math.floor(Math.random() * filteredData.length);
        let item = filteredData[dataIndex];

        this.setState({
            currentIndex: data.indexOf(item),
            pun: item
        })
    }

    render() {
        return (
            <div className='app'>
                <div className='container'>
                    <Pun joke={ this.state.pun.joke } punchLine={ this.state.pun.punchLine } />
                    <Button text='Another Pun' onClick={ this.update } />
                </div>
            </div>
        )
    }
}

export default App
