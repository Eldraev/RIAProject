var React = require('react'),
    Cat = require('./categories');
	Opt = require('./options');
	Pot = require('./portrait');

var Wrap = React.createClass({
    render: function(){
        return (
            <div className="wrap">
                <h1>Character Creator</h1>
					<Categories/>
					<Portrait/>
					<Options/>
			</div>
        );
    }
});

module.exports = Wrap;