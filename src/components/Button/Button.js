'use strict';

var styles = require('./Button.scss');

import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div className='button' onClick={ this.props.onClick }>{ this.props.text }</div>
//         )
//     }
// }

const Button = ({ onClick, text }) => {
    return (
        <div className='button' onClick={ onClick }>{ text }</div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default Button
