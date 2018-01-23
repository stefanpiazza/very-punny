import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';

const reducers = combineReducers({
    user: user,
    routing: routerReducer
});

export default reducers;
