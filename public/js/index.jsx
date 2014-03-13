/** @jsx React.DOM */

var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    Datepicker = require('root/Datepicker/views/Datepicker');

var currentDate = new Date();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

var Index = React.createClass({
  getInitialState: function () {
    return {
      isShow: this.props.isShow || false
    };
  },

  handleFocus: function () {
    this.setState({isShow: true});
  },

  handleMonthChange: function () {

  },

  render: function () {
    var trueS = true;
    return (
      <div>
        <Datepicker currentMonth={this.props.currentMonth}
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