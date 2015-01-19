var React = require("react"),
    Tags = require("./components/tags"),
    GitHub = require("./components/github"),
    Twitter = require("./components/twitter"),
	RecentPosts = require("./components/recent-posts");

document.addEventListener("DOMContentLoaded", function () {
	React.render(<RecentPosts posts={wordpress.recentPosts} />, document.getElementById("recent-posts"));
    React.render(<Tags tags={wordpress.tags} />, document.getElementById("tags"));
    React.render(<GitHub />, document.getElementById("github"));
    React.render(<Twitter />, document.getElementById("twitter"));
});
