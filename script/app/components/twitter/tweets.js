"use strict";

var React = require("react"),
    _ = require("underscore"),
    moment = require("moment");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            moreVisible: false   
        };
    },
    
    toggleMore: function() {
        this.setState({ moreVisible: !this.state.moreVisible });  
    },
    
    render: function() {
        return <div className="small-font">
            {this.renderTweets(0, 5)}
            <div className={"more " + (this.state.moreVisible ? "" : "hidden")}>
                {this.renderTweets(6)}
            </div>
            <div className="col-xs-12 text-right spacing-top-10">
                <a onClick={this.toggleMore}>{(this.state.moreVisible ? "less" : "more") + "..."}</a>
            </div>
        </div>;
    },
    
    renderTweets: function(start, end) {
        var tweets = this.props.tweets;
        if (tweets.length === 0)
            return "";
        
        end = end || tweets.length;
        
        var rendered = [];
        for (var i = start; i < end; i++) 
            rendered.push(this.renderTweet(tweets[i]));
        return rendered;
    },
                          
    renderTweet: function(tweet) {
        return <div className="light">
            {this.renderTweetHtml(tweet)}
            {this.renderTweetInfo(tweet)}
        </div>;          
    },
            
    renderTweetHtml: function(tweet) {
        return <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: tweet.html }}></div>
        </div>;
    },
        
    renderTweetInfo: function(tweet) {
        return <div className="row padding-bottom-15 border-bottom spacing-bottom-15">
            <div className="col-md-12 spacing-top-5">
                <span className="pull-left tiny-font spacing-top-3">{moment(tweet.date, "dd MMM DD HH:mm:ss ZZ YYYY").fromNow()}</span>
                <div className="pull-right">
                    <i className="fa fa-retweet spacing-right-5"></i>
                    <span className="spacing-right-15">{tweet.retweets}</span>
                    <i className="fa fa-star spacing-right-5"></i>
                    <span>{tweet.favourites}</span>
                </div>
            </div>
        </div>;
    }

});