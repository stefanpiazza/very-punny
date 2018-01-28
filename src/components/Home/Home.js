'use strict';

var styles = require('./Home.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';

import Loading from '../Loading/Loading';
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
                punchLine: ""
            },
            isLoading: true
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
                isLoading: false
            })
            this.update();
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
        let loading = null;
        let button = null;
        let pun = null;

        if (!this.state.isLoading) {
            button = <Button text='Tell Me Another' onClick={ this.update } />
            pun = <Pun joke={ this.state.pun.joke } punchLine={ this.state.pun.punchLine } />
            loading = null;
        }

        else {
            loading = <Loading text='Loading...' />
        }

        return (
            <div className='home'>
                { loading }
                { pun }
                { button }
            </div>
        );
    }
}

export default Home
