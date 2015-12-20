var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
	Categories = require('./components/categories');
	Options = require('./components/options');
	Options2 = require('./components/options2');
	Options3 = require('./components/options3');
	Options4 = require('./components/options4');
	Portrait = require('./components/portrait');

module.exports = (
    <Route path='/' component={Wrap}>
        <Route path='/categories' component={Categories}/>
		<Route path='/options' component={Options}/>
		<Route path='/options2' component={Options2}/>
		<Route path='/options2' component={Options3}/>
		<Route path='/options2' component={Options4}/>
		<Route path='/portrait' component={Portrait}/>
    </Route>
);