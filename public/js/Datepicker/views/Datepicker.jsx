/** @jsx React.DOM */

var React = require('react'),
    DatepickerPanel = require('root/Datepicker/views/DatepickerPanel');

var Datepicker = React.createClass({

  handleFocus: function () {
  },

  handleMonthChange: function () {
  },

  render: function () {
    return (
      <div>
        <input type="text" onFocus={this.handleFocus} name="calendar" />
        <DatepickerPanel currentMonth={this.props.currentMonth}
                         isShow={this.props.isShowDatepickerPanel}
                         currentYear={this.props.currentYear}
                         nextMonth={this.props.nextMonth}
                         nextYear={this.props.nextYear} />
      </div>
    );
  }
});
module.exports = Datepicker;