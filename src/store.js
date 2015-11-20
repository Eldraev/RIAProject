var Redux = require('redux'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
	
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;