var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    Home = require('./components/home');

module.exports = (
    <Route path='/' component={Home}>
    </Route>
);