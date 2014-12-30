var React = require("react"),
    GitHub = require("./views/github");

document.addEventListener("DOMContentLoaded", function () {
    React.render(new GitHub(), document.getElementById("github"));
});
