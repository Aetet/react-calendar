/**
* @jsx React.DOM
*/
var React = require('react');
var Title = React.createClass({
  render: function () {
      return (
        <div>
          <span>+</span>
          <span>Месяц</span>
          <span>Год</span>
          <span>-</span>
        </div>
      );
  }
});
module.exports = Title;