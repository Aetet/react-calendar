/**
* @jsx React.DOM
*/
var React = require('react'),
    Month = require('root/Datepicker/views/Month'),
    Title = require('root/Datepicker/views/Title');
var Datepicker = React.createClass({
  render: function () {
      return (
        <div>
          <Title />
          <Month />
        </div> 
      );
  }
});
module.exports = Datepicker;