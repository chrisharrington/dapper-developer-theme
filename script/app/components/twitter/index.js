var React = require("react"),
Twitter = require("data/twitter"),

Widget = require("components/widget"),
Tweets = require("./tweets"),
Profile = require("./profile"),

config = require("config");

module.exports = React.createClass({
    render: function() {
        return <Widget title="Twitter" className="twitter">
            <a ref="link" className="twitter-timeline" href="https://twitter.com/charrington99" data-widget-id="544598743610175488" data-tweet-limit="5">Tweets by @charrington99</a>
        </Widget>;
    }
});
