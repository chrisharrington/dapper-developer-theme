var React = require("react"),
    Twitter = require("data/twitter"),
    
    Tweets = require("./tweets"),
    Profile = require("./profile"),
    
    config = require("../../config");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            profile: {},
            tweets: []
        }  
    },
    
    componentWillMount: function() {
        var twitter = new Twitter(config.serviceLocation);
        twitter.recent().then(function(data) {
            this.setState({ profile: data.profile, tweets: data.tweets });
        }.bind(this));
    },    
    
    render: function() {
        return <div className="twitter padding-15 small-font box-sizing pull-left full-width">
            <h3 className="upper-case spacing-bottom-10">Twitter</h3>
            <Profile profile={this.state.profile} />
            <Tweets tweets={this.state.tweets} />
        </div>;   
    }
});