/**
* @jsx React.DOM
*/
var React = require('react'),
    DatepickerViewHelper = require('root/Datepicker/helpers/DatepickerViewHelper');
var Day = React.createClass({

  render: function () {
    var dayClass =
      DatepickerViewHelper
        .getDayClass('',
                     this.props.isSelectedFrom,
                     this.props.isSelectedTo,
                     this.props.isDisabled,
                     this.props.isBetween);

    return (
      <td data-date={this.props.date}
          data-month={this.props.month}
          data-year={this.props.year}
          className={dayClass} >
        {this.props.date}
      </td>      
    );
  }
});
module.exports = Day;