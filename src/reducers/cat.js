var initialState = require('./../initial-state');

var CatReducer = function(state, action){
    var newState = Object.assign({}, state);
    switch(action.type){
        case 'CAT_SWITCH':
            return newState;
        default:
            return state || initialState().currentCat;
    }
};

module.exports = CatReducer;