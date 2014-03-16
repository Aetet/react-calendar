/**
* @jsx React.DOM
*/
var React = require('react'),
    Day = require('root/Datepicker/views/Day');
    
var Week = React.createClass({
  render: function () {
    
    var dates = this.props.week.map(function (item) {
      if (item.date === 18) {
        console.log(item, 'isSelectedFrom', item.isSelectedFrom);
      }
      return (<Day date={item.date}
                   month={item.month}
                   year={item.year}
                   isSelectedFrom={item.isSelectedFrom}
                   isSelectedTo={item.isSelectedTo}
                   isDisabled={item.isDisabled}
                   isBetween={item.isBetween} />);
    });
    return (
      <tr>{dates}</tr>      
    );
  }
});
module.exports = Week;