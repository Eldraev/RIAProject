var initialState = require('./../initial-state');

var Opt1Reducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'SET_MALE':
            newState.gender = 1;
			window.alert("male");
            return newState;
        case 'SET_FEMALE':
            newState.gender = 0;
			window.alert("female");
            return newState;
        default:
            return state || initialState().gender;
    }
};

module.exports = Opt1Reducer;