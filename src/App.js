'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom';

import * as firebase from 'firebase/app';
import 'firebase/database';

import Navigation from './components/Navigation/Navigation';
import AsyncRoute from './components/AsyncRoute/AsyncRoute';
import Loading from './components/Loading/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPun } from './actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: (this.props.puns.length > 0 ? false : true)
        }
    }

    componentWillMount() {
        if (this.state.isFetching) {
            const db = firebase.database();
            const dbRef = db.ref();
            const punsRef = dbRef.child('puns');
            punsRef.once('value', snap => {
                snap.val().map(pun => {
                    this.props.addPun(pun);
                })
            })
            .then(() => {
                this.setState({
                    isFetching: false
                })
            })
        }
    }

    render() {
        if (this.state.isFetching) {
            return (
                <div className='app'>
                    <Navigation />
                    <div className='container'>
                        <Loading text='Loading...'/>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='app'>
                    <Navigation />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={ (props) => <AsyncRoute props={ props } loading={ Promise.resolve(require('./containers/Home/Home')) } />} />
                            <Route exact path='/all' component={ (props) => <AsyncRoute props={ props } loading={ Promise.resolve(require('./containers/All/All')) } />} />
                            {<Route exact path='/admin' component={ (props) => <AsyncRoute props={ props } loading={ Promise.resolve(require('./containers/Admin/Admin')) } />} />}
                            <Route path='/pun/:id' component={ (props) => <AsyncRoute props={ props } loading={ Promise.resolve(require('./containers/Pun/Pun')) } />} />
                            <Route component={ (props) => <AsyncRoute props={ props } loading={ Promise.resolve(require('./containers/NotFound/NotFound')) } />} />
                        </Switch>
                    </div>
                </div>
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
        addPun: addPun
    }, dispatch);
}

export default withRouter(connect(mapStatesToProps, matchDispatchToProps)(App));
