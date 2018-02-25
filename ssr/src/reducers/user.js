"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialState = {
    "isLoggedIn": false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'USER_LOGGED_IN':
            return Object.assign({}, state, { "isLoggedIn": true });
            break;

        case 'USER_LOGGED_OUT':
            return Object.assign({}, state, { "isLoggedIn": false });
            break;

        default:
            return state;
    }
};