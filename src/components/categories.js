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
					<li><button >Category 1</button></li>
					<li><button >Category 2</button></li>
					<li><button >Category 3</button></li>
					<li><button >Category 4</button></li>
				</ul>
            </div>
        );
    }
});

module.exports = Categories;