/** @jsx React.DOM */

var React = require('react'),
    Datepicker = require('root/Datepicker/views/Datepicker');
var Index = React.createClass({
  render: function () {
    return <div><Datepicker /></div>;
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.app'));