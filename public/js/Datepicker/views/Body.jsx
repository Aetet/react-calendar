/**
* @jsx React.DOM
*/
var React = require('react'),
    WeekDays = require('root/Datepicker/views/WeekDays'),
    Month = require('root/Datepicker/views/Month');

var Body = React.createClass({
  render: function () {
      return (
        <table>
          <WeekDays weekData={this.props.weekData} />
          <Month monthData={this.props.monthData} />
        </table>
      );
  }
});
module.exports = Body;