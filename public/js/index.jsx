/** @jsx React.DOM */

var React = require('react'),
    DatepickerMapper = require('root/Datepicker/model/DatepickerMapper'),
    Datepicker = require('root/Datepicker/views/Datepicker');
var Index = React.createClass({
  componentDidMount: function () {
  },
  render: function () {
    return (<div>
              <Datepicker month={1}
                          year={2014} />
            </div>);
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.app'));