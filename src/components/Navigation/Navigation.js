'use strict';

var styles = require('./Navigation.scss');

import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.openNavigation = this.openNavigation.bind(this);
        this.closeNavigation = this.closeNavigation.bind(this);
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    openNavigation() {
        this.setState({
            isOpen: true
        })
    }

    closeNavigation() {
        this.setState({
            isOpen: false
        })
    }

    toggleNavigation() {
        if (this.state.isOpen) {
            this.closeNavigation();
        }

        else if (!this.state.isOpen) {
            this.openNavigation();
        }
    }

    render() {
        let navClass = (this.state.isOpen ? 'nav is-open' : 'nav');
        let toggleIcon = (this.state.isOpen ? 'Close' : 'Open');

        return (
            <nav className={ navClass }>
                <ul className='nav__list'>
                    <li className='nav__list-item'>
                        <Link to='/' className='nav__link' onClick={ this.closeNavigation }>Home</Link>
                    </li>
                    <li className='nav__list-item'>
                        <Link to='/all' className='nav__link' onClick={ this.closeNavigation }>All</Link>
                    </li>
                </ul>
                <div className='nav__toggle' onClick={ this.toggleNavigation }>{ toggleIcon }</div>
            </nav>
        )
    }
}

export default Navigation
