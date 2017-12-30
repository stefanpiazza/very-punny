'use strict';

var styles = require('./Pun.scss');

import React from 'react';
import PropTypes from 'prop-types';

const Pun = ({ joke, punchLine }) => {
    return (
        <div className='pun'>
            <Joke text={ joke } />
            <PunchLine text={ punchLine } />
        </div>
    )
}

const Joke = ({ text }) => <p className='joke'>{ text }</p>
const PunchLine = ({ text }) => <p className='punch-line'>{ text }</p>

Pun.propTypes = {
    joke: PropTypes.string,
    punchLine: PropTypes.string
};

export default Pun
