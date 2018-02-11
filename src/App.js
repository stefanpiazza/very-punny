'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import AsyncRoute from './components/AsyncRoute/AsyncRoute';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='app'>
                    <Navigation />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={ (props) => <AsyncRoute props={ props } loading={ System.import('./containers/Home/Home') } />} />
                            <Route exact path='/all' component={ (props) => <AsyncRoute props={ props } loading={ System.import('./containers/All/All') } />} />
                            <Route exact path='/admin' component={ (props) => <AsyncRoute props={ props } loading={ System.import('./containers/Admin/Admin') } />} />
                            <Route component={ (props) => <AsyncRoute props={ props } loading={ System.import('./containers/NotFound/NotFound') } />} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
