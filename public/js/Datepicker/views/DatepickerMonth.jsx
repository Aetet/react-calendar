/**
* @jsx React.DOM
*/
var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    Body = require('root/Datepicker/views/Body'),
    Title = require('root/Datepicker/views/Title');
var DatepickerMonth = React.createClass({
  propTypes: {
    year: React.PropTypes.number,
    month: React.PropTypes.month
  },
  render: function () {
    var calendarData =
      DatepickerMapper.generateDatepickerData(
        this.props.year, this.props.month
      );
    return (
      <div>
        <Title  month={this.props.month}
                year={this.props.year} />
        <Body weekData={calendarData.weekData}
              monthData={calendarData.monthData} />
      </div> 
    );
  }
});
module.exports = DatepickerMonth;