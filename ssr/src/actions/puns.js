'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var addPun = function addPun(pun) {
    return {
        type: 'ADDED_PUN',
        payload: pun
    };
};

var addPuns = function addPuns(puns) {
    return {
        type: 'ADDED_PUNS',
        payload: puns
    };
};

var removePun = function removePun(pun) {
    return {
        type: 'REMOVED_PUN',
        payload: pun
    };
};

exports.addPun = addPun;
exports.addPuns = addPuns;
exports.removePun = removePun;