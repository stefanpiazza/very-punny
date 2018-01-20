'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncRoute from '../AsyncRoute/AsyncRoute';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ (props) => <AsyncRoute props={ props } loading={ System.import('../Home/Home') } />} />
                <Route path='/all' component={ (props) => <AsyncRoute props={ props } loading={ System.import('../PunList/PunList') } />} />
                <Route path='/admin' component={ (props) => <AsyncRoute props={ props } loading={ System.import('../Admin/Admin') } />} />
                <Route component={ (props) => <AsyncRoute props={ props } loading={ System.import('../NotFound/NotFound') } />} />
            </Switch>
        );
    }
}

export default Routes
