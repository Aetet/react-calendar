/**
* @jsx React.DOM
*/
var React = require('react'),
    Week = require('root/Datepicker/views/Week'),
    Month = require('root/Datepicker/views/Month');

//          Month monthData={this.props.monthData} />
var Body = React.createClass({
  render: function () {
      return (
        <table>
          <Week weekData={this.props.weekData} />
        </table>
      );
  }
});
module.exports = Body;