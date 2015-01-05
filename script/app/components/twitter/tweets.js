"use strict";

var React = require("react"),
    _ = require("underscore");

module.exports = React.createClass({
    renderTweets: function() {
        return _.map(this.props.tweets, function(tweet) {
            return <div className="light">
                <div className="row">
                    <div className="col-md-12" dangerouslySetInnerHTML={{ __html: tweet.html }}></div>
                </div>
                <div className="row padding-bottom-15 border-bottom spacing-bottom-15">
                    <div className="col-md-12 spacing-top-5">
                        <span className="pull-left tiny-font spacing-top-3">{tweet.timeago}</span>
                        <div className="pull-right">
                            <i className="fa fa-retweet spacing-right-5"></i>
                            <span className="spacing-right-15">{tweet.retweets}</span>
                            <i className="fa fa-star spacing-right-5"></i>
                            <span>{tweet.favourites}</span>
                        </div>
                    </div>
                </div>
            </div>;
        });
    },
    
    render: function() {
        return <div>
            {this.renderTweets()}
        </div>;
    }
});