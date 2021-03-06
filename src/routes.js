"use strict";

var React = require('react');
var Router = require('react-router');

var NotFoundRoute = require('react-router').NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="author" handler={require('./components/authors/manageAuthors')}/>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthors')}/>
        <NotFoundRoute handler={require('./components/NotFoundPage')}/>
    </Route>
);

module.exports = routes;

