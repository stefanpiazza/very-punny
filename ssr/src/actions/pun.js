'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var selectPun = function selectPun(pun) {
    return {
        type: 'SELECTED_PUN',
        payload: pun
    };
};

exports.selectPun = selectPun;