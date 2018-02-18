"use strict";

var React = require('react');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var _ = require('lodash');

var ActionTypes = require('../actions/action-types');
var AppDispatcher = require('../dispatcher/app-dispatcher');

var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function () {
        return _authors;
    },

    getAuthorById: function (id) {
        return _.find(_authors, {id: id});
    }
});

AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE_APP:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;

        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;

        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(author) {
                return author.id === action.id;
            });
            AuthorStore.emitChange();
            break;

        default:
            break;
    }
});

module.exports = AuthorStore;
