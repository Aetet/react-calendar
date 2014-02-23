/**
* @jsx React.DOM
*/
var React = require('react'),
    Day = require('root/Datepicker/views/Day');
    
var Week = React.createClass({
  render: function () {
    var dates = this.props.week.map(function (date) {
      return (<Day date={date}/>);
    });
    return (
      <tr>{dates}</tr>      
    );
  }
});
module.exports = Week;