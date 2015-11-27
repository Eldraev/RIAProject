var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
	Categories = require('./components/categories');
	Options = require('./components/options');

module.exports = (
    <Route path='/' component={Wrap}>
        <Route path='/categories' component={Categories}/>
		<Route path='/options' component={Options}/>
    </Route>
);