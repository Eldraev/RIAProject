var Redux = require('redux'),
    optReducer = require('./reducers/opt1'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    gender: optReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;