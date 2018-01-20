'use strict';

var styles = require('./Admin.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase';

import Button from '../Button/Button';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null,
            email: null,
            password: null
        }

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    componentWillMount() {

    }

    logIn() {
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

                this.setState({
                    isLoggedIn: true
                });
            })
            .catch(() => {
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                
                this.setState({
                    isLoggedIn: false
                });
            })
    }

    logOut() {
        const auth = firebase.auth();
        auth.signOut()
            .then(() => {
                this.setState({
                    isLoggedIn: false
                });
            })
    }

    render() {
        let adminLogin = null;
        let button = null;

        if (!this.state.isLoggedIn) {
            adminLogin = <AdminLogin
                email={ this.state.email }
                password={ this.state.password }
                onClick={ this.logIn }
            />
        button = <Button text='Log in' onClick={ this.logIn } />
        }

        else {
            adminLogin = null;
            button = <Button text='Log Out' onClick={ this.logOut } />
        }

        return (
            <div className='admin'>
                { adminLogin }
                { button }
            </div>
        );
    }
}

const AdminLogin = ({email, password, onClick}) => {
    let emailClass = (email === false ? 'input input--error' : 'input');
    let passwordClass = (password === false ? 'input input--error' : 'input');

    return (
        <div className='form'>
            <input type='email' placeholder='Enter email' className={ emailClass } id='email'></input>
            <input type='password' placeholder='Enter password' className={ passwordClass } id='password'></input>
        </div>
    )
}

export default Admin
