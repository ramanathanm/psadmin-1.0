"use strict";

var React = require('react');

var AuthorApi = require('../api/authorApi');
var AppDispatcher = require('../dispatcher/app-dispatcher');
var ActionTypes = require('../actions/action-types');

var AppInitializeAction = {
    initializeApp: function () {
        var allAuthors = AuthorApi.getAllAuthors();

        AppDispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE_APP,
            initialData: {
                authors: allAuthors
            }
        });
    }
};


module.exports = AppInitializeAction;