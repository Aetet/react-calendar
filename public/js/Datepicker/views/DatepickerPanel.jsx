/** @jsx React.DOM */

var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    DatepickerMonth = require('root/Datepicker/views/DatepickerMonth'),
    Control = require('root/Datepicker/views/Control'),
    DatepickerViewHelper = require('root/Datepicker/helpers/DatepickerViewHelper');

var currentDate = new Date();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var DatepickerPanel = React.createClass({
  propTypes: {
    currentMonth: React.PropTypes.number,
    currentYear:  React.PropTypes.number,
    nextMonth:    React.PropTypes.number,
    nextYear:     React.PropTypes.number,
    isShow:       React.PropTypes.boolean
  },

  handleMonthChange: function () {
  },

  render: function () {
    var viewParams = DatepickerViewHelper.getViewParams(this.props);
    return (
      <div>
        <input type="text" onFocus={this.handleFocus} name="calendar" />
        <div className={viewParams.isShow}>
          <Control onChange={this.handleMonthChange}
                   month={this.props.currentMonth}
                   year={this.props.currentYear} />
          <DatepickerMonth month={this.props.currentMonth}
                      year={this.props.currentYear} />
          <DatepickerMonth month={this.props.nextMonth}
                      year={this.props.nextYear} />
        </div>
      </div>
    );
  }
});
module.exports = DatepickerPanel;