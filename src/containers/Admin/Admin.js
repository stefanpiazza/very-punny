'use strict';

var styles = require('./Admin.scss');

import React from 'react';
import { render } from 'react-dom';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import Button from '../../components/Button/Button';
import PunList from '../../components/PunList/PunList';
import Pun from '../../components/Pun/Pun';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userLogIn, userLogOut, addPun, removePun } from '../../actions';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        }

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentWillMount() {

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

                this.props.userLogIn({ name: email })
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

    renderLoggedIn() {
        return (
            <ul className='pun-list'>
                <li className='pun-list__item'>
                    <div className='pun'>
                        <input type='text' className='joke input-joke' placeholder='Enter a joke' />
                        <input type='text' className='punch-line input-punch-line' placeholder='Enter a punch line' />
                    </div>
                    <Button text='+' onClick={ () => this.handleAdd() } type='square' />    
                </li>

                {
                    this.props.puns.map((pun, index) => {
                        return (
                            <li className='pun-list__item' key={ index } >
                                <div className='pun'>
                                    <p type='text' className='joke'>{ pun.joke }</p>
                                    <p type='text' className='punch-line'>{ pun.punchLine }</p>
                                </div>
                                <Button text='-' onClick={ () => this.handleRemove(pun) } type='square' />    
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    handleRemove(pun) {
        this.props.removePun(pun);
    }

    handleAdd() {
        const joke = document.getElementById('joke').value;
        const punchLine = document.getElementById('punch-line').value;

        if (!joke || !punchLine) return;

        const pun = {
            "joke": document.getElementById('joke').value,
            "punchLine": document.getElementById('punch-line').value
        }

        const index = this.props.puns.length;

        const db = firebase.database();
        const dbRef = db.ref();
        const punsRef = dbRef.child('puns');

        punsRef.child(index).set(pun)
        .then(() => {
            this.props.addPun(pun);

            document.getElementById('joke').value = '';
            document.getElementById('punch-line').value = '';
        })
    }

    render() {
        let adminLoggedIn = null;
        let adminLogin = null;
        let button = null;

        if (!this.props.user.isLoggedIn) {
            adminLoggedIn = false;
            adminLogin = this.renderLogIn();
            button = <Button text='Log in' onClick={ this.handleLogIn } />
        }

        else {
            adminLoggedIn = this.renderLoggedIn();
            adminLogin = null;
            button = <Button text='Log Out' onClick={ this.handleLogOut } />
        }

        return (
            <div className='admin'>
                { adminLoggedIn }
                { adminLogin }
                { button }
            </div>
        );
    }
}

function mapStatesToProps(state) {
    return {
        puns: state.puns,
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        userLogIn: userLogIn,
        userLogOut: userLogOut,
        addPun: addPun,
        removePun: removePun
    }, dispatch);
}

export default connect(mapStatesToProps, matchDispatchToProps)(Admin);
