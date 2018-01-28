'use strict';

var styles = require('./Home.scss');

import React from 'react';
import { render } from 'react-dom';

import Button from '../Button/Button';
import Pun from '../Pun/Pun';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.puns,
            currentIndex: -1,
            currentPun: {
                joke: "",
                punchLine: ""
            }
        }

        this.update = this.update.bind(this);
    }

    componentWillMount() {
        /**const db = firebase.database();
        const dbRef = db.ref();
        const punsRef = dbRef.child('puns');
        punsRef.once('value', snap => {
            this.setState({
                data: snap.val(),
                isLoading: false
            })
            this.update();
        });**/

        this.update();
    }

    update() {
        let filteredData = this.state.data.filter(item => this.state.data.indexOf(item) !== this.state.currentIndex);
        let dataIndex = Math.floor(Math.random() * filteredData.length);
        let item = filteredData[dataIndex];

        this.setState({
            currentIndex: this.state.data.indexOf(item),
            currentPun: item
        })
    }

    render() {
        return (
            <div className='home'>
                <Pun joke={ this.state.currentPun.joke } punchLine={ this.state.currentPun.punchLine } />
                <Button text='Tell Me Another' onClick={ this.update } />
            </div>
        );
    }
}

function mapStatesToProps(state) {
    return {
        puns: state.puns
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStatesToProps, matchDispatchToProps)(Home);
