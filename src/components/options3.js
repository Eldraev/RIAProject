var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Options3 = React.createClass({
    render: function(){
        return (
            <div className="optionsmenu">
                <h2>Options</h2>
                <ul>
					<li className="mainoption">Front: </li> 
					<li className="suboption"><input type="range" name="fronthair" min="0" max="10"/></li>
					<li className="mainoption">Back: </li> 
					<li className="suboption"><input type="range" name="backhair" min="0" max="10"/></li>
					<li className="mainoption">Facial: </li>
					<li className="suboption"><input type="range" name="facialhair" min="0" max="10"/></li>
					<li className="mainoption">Ears: </li>
					<li className="suboption"><input type="range" name="eartype" min="0" max="10"/></li>
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

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Options3);