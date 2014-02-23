/**
* @jsx React.DOM
*/
var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    Control = require('root/Datepicker/views/Control'),
    Body = require('root/Datepicker/views/Body'),
    Title = require('root/Datepicker/views/Title');
var Datepicker = React.createClass({
  propTypes: {
    year: React.PropTypes.number,
    month: React.PropTypes.month
  },
  getInitialState: function () {
    var year = this.props.year,
        month = this.props.month;
    return {
      year: year,
      month: month
    };
  },
  handleMonthChange: function (month, year) {
    this.setState({
      month: month,
      year: year
    });
  },
  render: function () {
    var calendarData = DatepickerMapper.generateDatepickerData(this.state.year, this.state.month);
    return (
      <div>
        <Control onChange={this.handleMonthChange}
                 month={this.state.month}
                 year={this.state.year}/>
        <Title  month={this.state.month}
                year={this.state.year} />
        <Body weekData={calendarData.weekData}
              monthData={calendarData.monthData} />
      </div> 
    );
  }
});
module.exports = Datepicker;