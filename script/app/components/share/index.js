"use strict";

var React = require("react"),
	Popup = require("components/popup"),
	
	config = require("config");

module.exports = React.createClass({
	twitter: function() {
		Popup.centre("https://twitter.com/intent/tweet?text=" + this.props.title + " " + this.props.permalink + " via @charrington99", "twitter", {
			width: 600,
			height: 300
		});
	},
	
	facebook: function() {
//		Popup.centre("https://www.facebook.com/dialog/share?app_id=" + config.facebook.appId + "&display=popup&href=http://dapperdeveloper.com&redirect_uri=http://dapperdeveloper.com", "facebook", {
//			width: 600,
//			height: 300
//		});
		
		FB.ui({
		  method: "share",
		  href: wordpress.permalink,
		}, function(response){});
	},
	
	render: function() {
		return <div>
			<a className="fa fa-twitter share-base share-twitter" onClick={this.twitter}></a>
			<a className="fa fa-facebook share-base share-facebook spacing-left-5" onClick={this.facebook}></a>
		</div>;
	}
});