var React = require('react'),
    Cat = require('./categories');
	Opt = require('./options');

var Wrap = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Character Creator</h1>
					<Categories/>
					<Options/>
			</div>
        );
    }
});

module.exports = Wrap;