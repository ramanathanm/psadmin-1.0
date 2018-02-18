"use strict";

var AppDispatcher = require('../dispatcher/app-dispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('./action-types');

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        AppDispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    deleteAuthor: function(id) {
        AuthorApi.deleteAuthor(id);

        AppDispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;
