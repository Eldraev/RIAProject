var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Options = React.createClass({
    render: function(){
        return (
            <div className="optionsmenu">
                <h2>Options</h2>
                <ul>
					<li className="mainoption">Option 1: </li> 
					<li className="suboption">Suboption 1.1: </li>
					<li className="suboption"><input type="radio" name="sex" value="male"/>Male <input type="radio" name="sex" value="female"/>Female </li>
					<li className="suboption">Suboption 1.2: </li> 
					<li className="mainoption">Option 2: </li>
					<li className="suboption">Suboption 2.1: </li> 
					<li className="mainoption">Option 3: </li>
					<li className="suboption">Suboption 3.1: </li>
					<li className="suboption">Suboption 3.2: </li> 
					<li className="suboption">Suboption 3.3: </li> 
					<li className="mainoption">Option 4: </li> 
					<li className="suboption">Suboption 4.1: </li> 
				</ul>
            </div>
        );
    }
});

module.exports = Options;