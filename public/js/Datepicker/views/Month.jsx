/**
* @jsx React.DOM
*/
var React = require('react'),
    Week = require('root/Datepicker/views/Week');
    
var Month = React.createClass({
  render: function () {
    var weeks = this.props.monthData.map(function (week) {
      return (<Week week={week}/>)
    });
    return (
      <tbody>
        {weeks}
      </tbody>
    );
  }
});
module.exports = Month;