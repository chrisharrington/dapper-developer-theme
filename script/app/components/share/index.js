"use strict";

var React = require("react"),
	Popup = require("components/popup"),
	
	config = require("config");

module.exports = React.createClass({
	event: function(label) {
		ga("send", "event", "social", label);	
	},
	
	twitter: function() {
		this.event("twitter");
		Popup.centre("https://twitter.com/intent/tweet?text=" + this.props.title + " " + this.props.permalink + " via @charrington99", "twitter", {
			width: 600,
			height: 300
		});
	},
	
	facebook: function() {
		this.event("facebook");
		Popup.centre("https://www.facebook.com/dialog/share?app_id=" + config.facebook.appId + "&display=popup&href=" + this.props.permalink + "&redirect_uri=" + this.props.permalink, "facebook", {
			width: 600,
			height: 400
		});
	},
	
	googleplus: function() {
		this.event("googleplus");
		Popup.centre("https://plus.google.com/share?url=" + this.props.permalink, "googleplus", {
			width: 510,
			height: 420
		});
	},
	
	linkedin: function() {
		this.event("linkedin");
		Popup.centre("https://www.linkedin.com/cws/share?url=" + this.props.permalink, "linkedin", {
			width: 600,
			height: 400
		});
	},
	
	render: function() {
		return <div>
			<a className="fa fa-twitter share-base share-twitter" onClick={this.twitter}></a>
			<a className="fa fa-facebook share-base share-facebook spacing-left-5" onClick={this.facebook}></a>
			<a className="fa fa-google-plus share-base share-google-plus spacing-left-5" onClick={this.googleplus}></a>
			<a className="fa fa-linkedin share-base share-linked-in spacing-left-5" onClick={this.linkedin}></a>
		</div>;
	}
});