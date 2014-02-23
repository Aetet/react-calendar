/**
* @jsx React.DOM
*/
var React = require('react');
var Week = React.createClass({
  render: function () {
    var self = this;
    var days = this.props.weekData.map(function (day) {
      return (<th>{day}</th>);
    });
    return (
      <thead>
        {days}
      </thead> 
    );
  }
});
module.exports = Week;