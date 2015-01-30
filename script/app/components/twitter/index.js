var React = require("react"),
    Twitter = require("data/twitter"),
    
    Tweets = require("./tweets"),
    Profile = require("./profile"),
	Widget = require("../widget"),
    
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
		return <Widget title="Twitter" hidden={this.state.tweets.length === 0}>
			<Profile profile={this.state.profile} />
			<Tweets tweets={this.state.tweets} />
        </Widget>;   
    }
});