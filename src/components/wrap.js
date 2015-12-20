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
					{true && <Options/>}
					{false && <Options2/>}
					{false && <Options3/>}
					{false && <Options4/>}
			</div>
        );
    }
});

module.exports = Wrap;