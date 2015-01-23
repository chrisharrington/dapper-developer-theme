var React = require("react"),
    Tags = require("./components/tags"),
    GitHub = require("./components/github"),
	RecentPosts = require("./components/recent-posts"),
	Twitter = require("components/twitter"),
	Share = require("components/share");

document.addEventListener("DOMContentLoaded", function () {
	React.render(<RecentPosts posts={wordpress.recentPosts} />, document.getElementById("recent-posts"));
    React.render(<Tags tags={wordpress.tags} />, document.getElementById("tags"));
    React.render(<GitHub />, document.getElementById("github"));
	React.render(<Twitter />, document.getElementById("twitter"));
	
	if (document.getElementById("share-top")) {
		var share = <Share title={wordpress.title} permalink={wordpress.permalink} />;
		React.render(share, document.getElementById("share-top"));
		React.render(share, document.getElementById("share-bottom"));
	}
});
