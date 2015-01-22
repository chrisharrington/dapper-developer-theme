"use strict";

var React = require("react");

module.exports = React.createClass({
	twitter: function() {
		window.open("https://twitter.com/intent/tweet?text=" + this.props.title + " " + this.props.permalink + " via @charrington99", "twitter", "width=600,height=300,left=300,top=300");
	},
	
	render: function() {
		return <div>
			<a className="fa fa-twitter share-base share-twitter" onClick={this.twitter}></a>
		</div>;
	}
});