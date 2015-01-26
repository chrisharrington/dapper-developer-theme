"use strict";

var React = require("react"),
	Chartist = require("chartist"),
	_ = require("underscore");

module.exports = React.createClass({
	componentDidMount: function() {
		new Chartist.Bar(this.refs.chart.getDOMNode(), this.props.data, {
			seriesBarDistance: 5,
			chartPadding: 0
		}, [
			["(min-width: 600px)", {
				seriesBarDistance: 10
			}]
		]);
	},
	
	render: function() {
		return <div ref="container" className="padding-top-15 padding-left-15 padding-right-15">
			<div className="row">
				<div className="col-md-6">
					<h3 className="spacing-top-0">{this.props.title}</h3>
					<span className="spacing-top-5 light small-font">{this.props.subtitle}</span>
				</div>
				<div className="col-md-6">
					{this.renderLegend()}
				</div>
			</div>
			<div className="row spacing-top-5">
				<div className="col-xs-12">
					<div ref="chart" className="ct-chart ct-golden-section"></div>
				</div>
			</div>
		</div>;
	},
	
	renderLegend: function() {
		return <div className="legend pull-right-sm spacing-top-5 spacing-top-0-sm">
			{_.map(this.props.legend, function(item, index) {
				return this.renderLegendItem(item, index+1);
			}.bind(this))}
		</div>
	},
	
	renderLegendItem: function(item, index) {
		return <div className={"pull-left" + (index > 1 ? " spacing-left-15" : "")}>
			<div className={"pull-left legend-square square-" + index}></div>
			<div className="pull-left legend-label spacing-left-5 tiny-font light">{item}</div>
		</div>;
	}
});