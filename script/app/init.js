var React = require("react"),
    Tags = require("./components/tags"),
    GitHub = require("./components/github"),
    Twitter = require("./components/twitter");

document.addEventListener("DOMContentLoaded", function () {
    React.render(<Tags tags={wordpress.tags} />, document.getElementById("tags"));
    React.render(<GitHub />, document.getElementById("github"));
    React.render(<Twitter />, document.getElementById("twitter"));
});
