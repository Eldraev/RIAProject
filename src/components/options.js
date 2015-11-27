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
					<li className="mainoption">Gender: </li> 
					<li className="suboption"><input type="radio" name="sex" value="male"/>Male <input type="radio" name="sex" value="female"/>Female </li>
					<li className="mainoption">Complexion: </li>
					<li className="suboption">light<input type="range" name="complexion" min="0" max="10"/>dark</li>
					<li className="mainoption">Race: </li>
					<li className="suboption"><button className="racebtn">Cel</button><button className="racebtn">Daeva</button></li>
					<li className="suboption"><button className="racebtn">Cadmus</button><button className="racebtn">Nephilim</button></li> 
					<li className="suboption"><button className="racebtn">Therian</button><button className="racebtn">Eldra</button></li> 
				</ul>
            </div>
        );
    }
});

module.exports = Options;