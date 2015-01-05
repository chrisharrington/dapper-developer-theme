"use strict";

var React = require("react"),
    _ = require("underscore");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            moreVisible: false   
        };
    },
    
    toggleMore: function() {
        this.setState({ moreVisible: !this.state.moreVisible });  
    },
    
    renderTweets: function(start, end) {
        var tweets = this.props.tweets;
        if (tweets.length === 0)
            return "";
        
        end = end || tweets.length;
        
        var rendered = [];
        for (var i = start; i < end; i++) {
            var tweet = tweets[i];
            rendered.push(<div className="light">
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
            </div>);
        }
        return rendered;
    },
    
    render: function() {
        return <div>
            {this.renderTweets(0, 5)}
            <div className={"more " + (this.state.moreVisible ? "" : "hidden")}>
                {this.renderTweets(6)}
            </div>
            <div className="col-xs-12 text-right spacing-top-10">
                <a onClick={this.toggleMore}>{(this.state.moreVisible ? "less" : "more") + "..."}</a>
            </div>
        </div>;
    }
});