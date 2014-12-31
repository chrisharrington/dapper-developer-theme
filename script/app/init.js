var React = require("react"),
    GitHub = require("./views/github");

document.addEventListener("DOMContentLoaded", function () {
    React.render(<GitHub />, document.getElementById("github"));
});
