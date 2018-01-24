'use strict';

var styles = require('./All.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';

import Loading from '../Loading/Loading';
import PunList from '../PunList/PunList';

class All extends React.Component {
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
            punList = <PunList puns={ this.state.data } />
            loading = null;
        }

        else {
            loading = <Loading text='Loading...' />
        }

        return (
            <div className='all'>
                { loading }
                { punList }
            </div>
        );
    }
}

export default All
