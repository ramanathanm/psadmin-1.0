"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar sticky-top navbar-expand navbar-light bg-light">
                <Link to="app" className="navbar-brand">
                    <img src="images/ps-log.png" alt="PluralSight" width="127" height="57"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="app" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="authors" className="nav-link">Authors</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;