"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentWillMount: function() {
       this.setState({authors: AuthorApi.getAllAuthors()});
    },

    render: function () {
        return (
            <div>
                <AuthorList authors={this.state.authors}/>
                <Link to="author" className="btn btn-primary">Manage Author</Link>
            </div>
        );
    }
});

module.exports = AuthorPage;