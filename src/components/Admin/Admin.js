'use strict';

var styles = require('./Admin.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';

import Button from '../Button/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userLogIn, userLogOut } from '../../actions';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    componentWillMount() {
        console.log(this.props.user);
    }

    renderLogIn() {
        let emailClass = (this.state.email === false ? 'input input--error' : 'input');
        let passwordClass = (this.state.password === false ? 'input input--error' : 'input');

        return (
            <div className='form'>
                <input type='email' placeholder='Enter email' className={ emailClass } id='email'></input>
                <input type='password' placeholder='Enter password' className={ passwordClass } id='password'></input>
            </div>
        )
    }

    handleLogIn() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        this.setState({
            email: null,
            password: null
        })

        if (!email) this.setState({ email: false });
        if (!password) this.setState({ password: false });

        if (!email || !password) return;

        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';

                this.props.userLogIn({ name: 'Stefan' })
            })
            .catch(() => {
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';

                this.props.userLogOut();
            })
    }

    handleLogOut() {
        const auth = firebase.auth();
        auth.signOut()
            .then(() => {
                this.props.userLogOut();
            })
    }

    render() {
        let adminLogin = null;
        let button = null;

        if (!this.props.user) {
            adminLogin = this.renderLogIn();
            button = <Button text='Log in' onClick={ this.handleLogIn } />
        }

        else {
            adminLogin = null;
            button = <Button text='Log Out' onClick={ this.handleLogOut } />
        }

        return (
            <div className='admin'>
                { adminLogin }
                { button }
            </div>
        );
    }
}

function mapStatesToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        userLogIn: userLogIn,
        userLogOut: userLogOut
    }, dispatch);
}

export default connect(mapStatesToProps, matchDispatchToProps)(Admin);
