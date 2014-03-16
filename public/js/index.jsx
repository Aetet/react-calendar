/** @jsx React.DOM */

var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    Datepicker = require('root/Datepicker/views/Datepicker');

var currentDate = new Date();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var Index = React.createClass({
  propTypes: {
    currentMonth:          React.PropTypes.number,
    selectedDates:         React.PropTypes.array,
    disabledDates:         React.PropTypes.array,
    isShowDatepickerPanel: React.PropTypes.boolean,
    currentYear:           React.PropTypes.number,
    nextMonth:             React.PropTypes.number,
    nextYear:              React.PropTypes.number
  },

  displayName: 'Index',

  render: function () {
    var trueS = true;
    return (
      <div>
        <Datepicker currentMonth={this.props.currentMonth}
                    selectedDates={this.props.selectedDates}
                    disabledDates={this.props.disabledDates}
                    isShowDatepickerPanel={trueS}
                    currentYear={this.props.currentYear}
                    nextMonth={this.props.nextMonth}
                    nextYear={this.props.nextYear} />
      </div>
    );
  }
});
var dateIn = DatepickerMapper.generateCurrentAndNextMonth(year, month);
React.renderComponent(
    <Index currentMonth={dateIn.currentMonth} 
           currentYear={dateIn.currentYear} 
           nextMonth={dateIn.nextMonth} 
           nextYear={dateIn.nextYear} /> , document.querySelector('.app'));