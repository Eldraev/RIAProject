var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Options2 = React.createClass({
    render: function(){
        return (
            <div className="optionsmenu">
                <h2>Options</h2>
                <ul>
					<li className="mainoption">Shape: </li> 
					<li className="suboption"><input type="range" name="facetype" min="0" max="10"/></li>
					<li className="mainoption">Eyes: </li> 
					<li className="suboption"><input type="range" name="eyetype" min="0" max="10"/></li>
					<li className="mainoption">Eyecolour: </li>
					<li className="suboption"><input type="range" name="eyecolour" min="0" max="10"/></li>
					<li className="mainoption">Mouth: </li>
					<li className="suboption"><input type="range" name="mouthtype" min="0" max="10"/></li>
					<li className="mainoption">Lips: </li>
					<li className="suboption"><input type="range" name="lipcolour" min="0" max="10"/></li>
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

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Options2);