var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Options4 = React.createClass({
    render: function(){
        return (
            <div className="optionsmenu">
                <h2>Options</h2>
                <ul>
					<li className="mainoption">Attack: </li> 
					<li className="suboption"><input type="range" name="attack" min="0" max="10"/></li>
					<li className="mainoption">Denefense: </li> 
					<li className="suboption"><input type="range" name="defense" min="0" max="10"/></li>
					<li className="mainoption">Speed: </li>
					<li className="suboption"><input type="range" name="speed" min="0" max="10"/></li>
					<li className="mainoption">Blub: </li>
					<li className="suboption"><input type="range" name="blub" min="0" max="10"/></li>
				</ul>
            </div>
        );
    }
});

var mapStateToProps = function(state){
	return state.gender;
};

var mapDispatchToProps = function(dispatch){
    return {
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Options4);