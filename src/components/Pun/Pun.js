'use strict';

var styles = require('./Pun.scss');

import React from 'react';

class Pun extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pun'>
                <p className='joke'>{ this.props.joke }</p>
                <p className='punch-line'>{ this.props.punchLine }</p>
            </div>
        )
    }
}

export default Pun
