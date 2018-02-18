"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div className="continer-fluid">
                <h3>Page Not Found!</h3>
                <Link to="app">Back to App </Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;