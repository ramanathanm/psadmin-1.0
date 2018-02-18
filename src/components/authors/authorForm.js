"use strict";

var React = require('react');
var TextInput = require('../../components/common/text-input');

var AuthorForm = React.createClass({
    render: function(){
        return (
            <form className="needs-validation">
                <h1>Manage Author</h1>
                <TextInput
                    name="firstName"
                    label="First Name"
                    error={this.props.errors.firstName}
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                />
                <br/>
                <TextInput
                    name="lastName"
                    label="Last Name"
                    error={this.props.errors.lastName}
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                />
                <input
                    type="submit"
                    value="Save"
                    className="btn btn-success"
                    onClick={this.props.onSave}
                />
            </form>
        );
    }
});

module.exports = AuthorForm;