import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import puns from './puns';

const reducers = combineReducers({
    user: user,
    puns: puns,
    routing: routerReducer
});

export default reducers;
