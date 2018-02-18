"use strict";

var React = require('react');

var AuthorForm = React.createClass({
    render: function(){
        return (
            <form>
                <h1>Manage Author</h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       className="form-control"
                       name="firstName"
                       placeholder="First Name"
                       ref="firstName"
                       value="">
                </input>
                <br/>
                <label htmlFor="lastName">LastName</label>
                <input type="text"
                       className="form-control"
                       placeholder="Last Name"
                       ref="lastName"
                       value=""
                       name="lastName"/>
                <br/>
                <input type="submit" value="Save" className="btn btn-success"/>
            </form>
        );
    }
});

module.exports = AuthorForm;