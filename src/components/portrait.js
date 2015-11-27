var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Portrait = React.createClass({
    render: function(){
        return (
            <div className="portraitview">
                <h2>Preview</h2>
                <ul>
					<li><img className="portrait" src="img/img.jpg" alt="portrait"></img></li>
				</ul>
            </div>
        );
    }
});

module.exports = Portrait;