/**
* @jsx React.DOM
*/
var React = require('react');
var Day = React.createClass({
  render: function () {

    return (
      <td>{this.props.date.day}</td>      
    );
  }
});
module.exports = Day;