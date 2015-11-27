var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
	Categories = require('./components/categories');

module.exports = (
    <Route path='/' component={Wrap}>
        <Route path='/categories' component={Categories}/>
    </Route>
);