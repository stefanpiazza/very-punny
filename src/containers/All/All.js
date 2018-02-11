'use strict';

var styles = require('./All.scss');

import React from 'react';
import { render } from 'react-dom';

import PunList from '../../components/PunList/PunList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPun } from '../../actions';

class All extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='all'>
                <PunList puns={ this.props.puns } />
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

export default connect(mapStatesToProps, matchDispatchToProps)(All);
