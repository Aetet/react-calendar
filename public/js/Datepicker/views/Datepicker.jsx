/**
* @jsx React.DOM
*/
var React = require('react'),
    Body = require('root/Datepicker/views/Body'),
    Title = require('root/Datepicker/views/Title');
var Datepicker = React.createClass({
  render: function () {
    return (
      <div>
        <Title month={this.props.month}
               year={this.props.year} />
        <Body weekData={this.props.weekData}
              monthData={this.props.monthData} />
      </div> 
    );
  }
});
module.exports = Datepicker;