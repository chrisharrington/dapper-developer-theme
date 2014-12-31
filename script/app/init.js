var React = require("react"),
    GitHub = require("./components/github"),
    Twitter = require("./components/twitter");

document.addEventListener("DOMContentLoaded", function () {
    React.render(<GitHub />, document.getElementById("github"));
    React.render(<Twitter />, document.getElementById("twitter"));
});
