'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route component={ NotFound } />
            </Switch>
        );
    }
}

export default Routes
