var React = require("react"),
    Twitter = require("../../controls/twitter"),
    _ = require("underscore"),
    
    config = require("../../config");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            tweets: []
        }  
    },
    
    componentWillMount: function() {
        var twitter = new Twitter(config.serviceLocation);
        twitter.recent().then(function(tweets) {
            this.setState({ tweets: tweets });
        }.bind(this));
    },    
    
    renderTweets: function() {
        return _.map(this.state.tweets, function(tweet) {
            return <div className="light">
                <div className="row">
                    <div className="col-md-12" dangerouslySetInnerHTML={{ __html: tweet.html }}></div>
                </div>
                <div className="row padding-bottom-15 border-bottom spacing-bottom-15">
                    <div className="col-md-12 spacing-top-5">
                        <div className="pull-right">
                            <i className="fa fa-retweet spacing-right-5"></i>
                            <span className="spacing-right-15">{tweet.retweets}</span>
                            <i className="fa fa-star spacing-right-5"></i>
                            <span>{tweet.favourites}</span>
                        </div>
                    </div>
                </div>
            </div>;
             return <span dangerouslySetInnerHTML={{ __html: tweet.html }}></span>;
        });
    },
    
    render: function() {
        return <div className="twitter padding-15 small-font box-sizing pull-left full-width">
            <h3 className="upper-case spacing-bottom-10">Twitter</h3>
            {this.renderTweets()}
        </div>;   
    }
});