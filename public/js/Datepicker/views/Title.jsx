/**
* @jsx React.DOM
*/
var React = require('react');
var Title = React.createClass({
  render: function () {
      return (
        <div>
          <span>+</span>
          <span>{this.props.month}</span>
          <span>{this.props.year}</span>
          <span>-</span>
        </div>
      );
  }
});
module.exports = Title;