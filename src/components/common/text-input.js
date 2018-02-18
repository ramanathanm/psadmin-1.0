"use strict";

var React = require('react');

var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },

    render: function () {
        var wrapperClass = 'form-control';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += ' ' + 'is-invalid';
        } else {
            wrapperClass += ' ' + 'is-valid';
        }
        return (
            <div className="form-group">
                <label htmlFor="this.props.name">{this.props.label}</label>
                <div className="field">
                    <input
                        className={wrapperClass}
                        type="text"
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        ref={this.props.name}
                        onChange={this.props.onChange}
                        />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        );
    }
});

module.exports = TextInput;