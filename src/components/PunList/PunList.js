'use strict';

var styles = require('./PunList.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';

import Loading from '../Loading/Loading';
import Pun from '../Pun/Pun';

class PunList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        }
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
        });
    }

    render() {
        let loading = null;
        let punList = null;

        if (!this.state.isLoading) {
            punList = this.state.data.map((pun, index) =>
                <li className='pun-list__item' key={ index } >
                    <Pun joke={ pun.joke } punchLine={ pun.punchLine } />
                </li>
            );

            loading = null;
        }

        else {
            loading = <Loading text='Loading...' />
        }

        return (
            <ul className='pun-list'>
                { loading }
                { punList }
            </ul>
        );
    }
}

export default PunList
