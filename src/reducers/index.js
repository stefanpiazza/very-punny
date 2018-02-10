import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import puns from './puns';
import pun from './pun';

const reducers = combineReducers({
    user: user,
    puns: puns,
    pun: pun,
    routing: routerReducer
});

export default reducers;
