/**
* @jsx React.DOM
*/
var React = require('react');
var Control = React.createClass({
  handleMinus: function () {
    var month,
        year = this.props.year,
        monthPrev = this.props.month - 1;
    if (monthPrev >= 0) {
      month = monthPrev;
    } else {
      month = 12 + monthPrev;
      year -= 1;
    }
    this.props.onChange(month, year);
  },
  handlePlus: function () {
    var month,
        year = this.props.year,
        monthNext = this.props.month + 1;
    if (monthNext < 12) {
      month = monthNext;
    } else {
      month = monthNext - 12;
      year += 1;
    }
    this.props.onChange(month, year);
  },
  render: function () {
    return (
      <div>
        <span onClick={this.handleMinus}>-</span>
        <span onClick={this.handlePlus}>+</span>
      </div>
    );
  }
});
module.exports = Control;