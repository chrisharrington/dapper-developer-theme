"use strict";

var React = require("react"),
	Widget = require("components/widget"),
	_ = require("underscore");

module.exports = React.createClass({
	renderPosts: function() {
		return _.map(this.props.posts, function(post) {
			return this.renderPost(post);
		}.bind(this));
	},
	
	renderPost: function(post) {
		return <div data-key={post.id} className="row spacing-top-5">
			<div className="col-xs-12">
				<h5 className="secondary-colour bold upper-case">{post.title}</h5>
			</div>
		</div>;
	},
	
	render: function() {
		return <Widget title="Recent Articles">
			{this.renderPosts()}
		</Widget>
	}
});