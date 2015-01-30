"use strict";

var React = require("react"),
	Widget = require("components/widget"),
	_ = require("underscore"),
	moment = require("moment");

module.exports = React.createClass({
	renderPosts: function() {
		return _.map(this.props.posts, function(post) {
			return this.renderPost(post);
		}.bind(this));
	},
	
	renderPost: function(post) {
		return <div data-key={post.id} className="row">
			<a href={post.permalink} className="col-xs-12 hover padding-top-10 padding-bottom-10">
				<h5 className="secondary-colour bold upper-case">{post.title}</h5>
				<span className="pull-left tiny-font light">{moment.utc(post.date).fromNow()}</span>
			</a>
		</div>;
	},
	
	render: function() {
		return <Widget title="Recent Articles">
			{this.renderPosts()}
		</Widget>
	}
});