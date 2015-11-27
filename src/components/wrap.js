var React = require('react'),
    Nav = require('./categories');

var Wrap = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Character Creator</h1>
                <Categories/>
            </div>
        );
    }
});

module.exports = Wrap;