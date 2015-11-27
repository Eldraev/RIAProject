var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Categories = React.createClass({
    render: function(){
        return (
            <div className="catmenu">
                <h2>Categories</h2>
                <ul>
					<li><button ><b>Body</b></button></li>
					<li><button ><b>Face</b></button></li>
					<li><button ><b>Hair</b></button></li>
					<li><button ><b>Stats</b></button></li>
				</ul>
            </div>
        );
    }
});

module.exports = Categories;