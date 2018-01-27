'use strict';

var styles = require('./PunList.scss');

import React from 'react';
import { render } from 'react-dom';

import Pun from '../Pun/Pun';

const PunList = ({ puns }) => {
    const punListItems = (puns) => puns.map((pun, index) => punListItem(pun, index));
    const punListItem = (pun, index) =><li className='pun-list__item' key={ index } ><Pun joke={ pun.joke } punchLine={ pun.punchLine } /></li>

    return (
        <ul className='pun-list'>{ punListItems(puns) }</ul>
    )
}

export default PunList
