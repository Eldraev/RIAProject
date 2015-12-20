var React = require('react'),
    Cat = require('./categories');
	Opt = require('./options2');
	Pot = require('./portrait');

var Wrap = React.createClass({
    render: function(){
        return (
            <div className="wrap">
                <h1>Character Creator</h1>
					<Categories/>
					<Portrait/>
					<Options4/>
			</div>
        );
    }
});

module.exports = Wrap;