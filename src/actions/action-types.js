"use strict";

var keyMirror = require('react/lib/keyMirror');

var ActionTypes = {
    INITIALIZE_APP: null,
    CREATE_AUTHOR: null,
    DELETE_AUTHOR: null
};

module.exports = keyMirror(ActionTypes);