/** @jsx React.DOM */

var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    Datepicker = require('root/Datepicker/views/Datepicker');
var cellInfo = DatepickerMapper.generateDatepickerData(2014, 1);
var Index = React.createClass({
  componentDidMount: function () {
  },
  render: function () {
    return (<div>
              <Datepicker weekData={cellInfo.weekData}
                          monthData={cellInfo.monthData}
                          month={cellInfo.month}
                          year={cellInfo.year} />
            </div>);
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.app'));