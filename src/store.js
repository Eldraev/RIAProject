var Redux = require('redux'),
    catReducer = require('./reducers/cat'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    currentCat: catReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;