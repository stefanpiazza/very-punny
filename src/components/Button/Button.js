'use strict';

var styles = require('./Button.scss');

import React from 'react';
import PropTypes from 'prop-types';

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
