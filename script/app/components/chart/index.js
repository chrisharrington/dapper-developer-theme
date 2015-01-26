"use strict";

var React = require("react"),
	BarChart = require("./bar");

module.exports = React.createClass({
	render: function() {
		return <BarChart data={this.props.data} title={this.props.title} subtitle={this.props.subtitle} legend={this.props.legend} />;
	}
});