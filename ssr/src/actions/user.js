'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var userLogIn = function userLogIn(user) {
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    };
};

var userLogOut = function userLogOut(user) {
    return {
        type: 'USER_LOGGED_OUT',
        payload: user
    };
};

exports.userLogIn = userLogIn;
exports.userLogOut = userLogOut;