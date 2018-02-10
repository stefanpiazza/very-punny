'use strict';

var styles = require('./All.scss');

import React from 'react';
import { render } from 'react-dom';

import PunList from '../../components/PunList/PunList';

import { connect } from 'react-redux';

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

export default connect(mapStatesToProps, null)(All);
