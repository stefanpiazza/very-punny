'use strict';

var styles = require('./Home.scss');

import React from 'react';
import { render } from 'react-dom';

import Button from '../../components/Button/Button';
import Pun from '../../components/Pun/Pun';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectPun } from '../../actions';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    componentWillMount() {

    }

    update() {
        let puns = this.props.puns.filter(item => item !== this.props.pun);
        let pun = puns[Math.floor(Math.random() * puns.length)];

        this.props.selectPun(pun);
    }

    render() {
        return (
            <div className='home'>
                <Pun joke={ this.props.pun.joke } punchLine={ this.props.pun.punchLine } />
                <Button text='Tell Me Another' onClick={ this.update } />
            </div>
        );
    }
}

function mapStatesToProps(state) {
    return {
        puns: state.puns,
        pun: state.pun
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPun: selectPun
    }, dispatch);
}

export default connect(mapStatesToProps, matchDispatchToProps)(Home);
