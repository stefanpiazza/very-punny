'use strict';

var styles = require('./Pun.scss');

import React from 'react';
import { render } from 'react-dom';

import PunList from '../../components/PunList/PunList';
import NotFound from '../../containers/NotFound/NotFound';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Pun extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// Filters list rather than attempting to index out of bounds
		let punList = this.props.puns.filter((pun) => this.props.puns.indexOf(pun) == this.props.match.params.id);

		if (punList.length !== 0) {
			return (
				<div className='all'>
				    <PunList puns={ punList } />
				</div>
			)			
		}

		else {
			return (
				<NotFound />
			)
		}
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

export default connect(mapStatesToProps, matchDispatchToProps)(Pun);