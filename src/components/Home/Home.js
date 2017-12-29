'use strict';

var styles = require('./Home.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';

import Button from '../Button/Button';
import Pun from '../Pun/Pun';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentIndex: 0,
            pun: {
                joke: "",
                punchLine: "Loading..."
            }
        }

        this.update = this.update.bind(this);
    }

    componentWillMount() {
        const db = firebase.database();
        const dbRef = db.ref();
        const punsRef = dbRef.child('puns');
        punsRef.once('value', snap => {
            this.setState({
                data: snap.val(),
                currentIndex: 0,
                pun: snap.val()[0]
            })
        });
    }

    update() {
        let filteredData = this.state.data.filter(item => this.state.data.indexOf(item) !== this.state.currentIndex);
        let dataIndex = Math.floor(Math.random() * filteredData.length);
        let item = filteredData[dataIndex];

        this.setState({
            currentIndex: this.state.data.indexOf(item),
            pun: item
        })
    }

    render() {
        return (
            <div className='home'>
                <Pun joke={ this.state.pun.joke } punchLine={ this.state.pun.punchLine } />
                <Button text='Tell Me Another' onClick={ this.update } />
            </div>
        );
    }
}

export default Home
