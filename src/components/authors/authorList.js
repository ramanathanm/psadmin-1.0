"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');

var AuthorAction = require('../../actions/author-actions');

var AuthorList = React.createClass({
    deleteAuthor: function (id, event) {
        event.preventDefault();
        AuthorAction.deleteAuthor(id);
        toastr.success('Author deleted successfully.');
    },

    render: function () {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td>
                        <div className="close" onClick={this.deleteAuthor.bind(this, author.id)}>
                            <span>&times;</span>
                        </div>
                    </td>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow.bind(this))}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;