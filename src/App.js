'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Routes from './components/Routes/Routes';

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
                        <Routes />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
