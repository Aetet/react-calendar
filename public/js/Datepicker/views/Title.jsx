/**
* @jsx React.DOM
*/
var React = require('react');
var Title = React.createClass({
  getMonth: function (number) {
    var months = ['Январь', 'Февраль', 'Март',
    'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентрябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'];
    return months[number];
  },
  render: function () {
    var month = this.getMonth(this.props.month);
    return (
      <div>
        <span>{month}</span>
        <span>{this.props.year}</span>
      </div>
    );
  }
});
module.exports = Title;