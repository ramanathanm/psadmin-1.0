"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');

var AuthorForm = require('./authorForm');
var AuthorAction = require('../../actions/author-actions');
var AuthorStore = require('../../stores/author-store');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm("Leave w/o saving?")) {
                transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {},
            dirty: false
        };
    },

    setAuthorState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;

        this.state.author[field] = value;
        this.setState({author: this.state.author});
    },

    authorFormIsValid: function () {
        var isFormValid = true;

        this.state.errors = {};

        if (this.state.author.firstName < 3) {
            this.state.errors.firstName = "First Name is invalid";
            isFormValid = false;
        }

        if (this.state.author.lastName < 3) {
            this.state.errors.lastName = "Last Name is invalid";
            isFormValid = false;
        }

        this.setState({errors: this.state.errors});
        return isFormValid;
    },

    saveAuthor: function (event) {
        event.preventDefault();

        if(!this.authorFormIsValid()) {
            return;
        }

        AuthorAction.createAuthor(this.state.author);
        this.setState({dirty: false});
        toastr.success('Author saved successfully.');
        this.transitionTo("authors");
    },

    componentWillMount: function () {
        var authorId = this.props.params.id;
        if(authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },

    render: function () {
        return (
            <AuthorForm
                author = {this.state.author}
                errors = {this.state.errors}
                onChange = {this.setAuthorState}
                onSave = {this.saveAuthor}
            />
        );
    }
});

module.exports = ManageAuthorPage;