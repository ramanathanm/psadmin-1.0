"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var AppInitializeAction = require('./actions/app-initiaialize-action');

AppInitializeAction.initializeApp();

Router.run(routes, function (Handler) {
    React.render(
        <Handler/>,
        document.getElementById('App')
    );
});
