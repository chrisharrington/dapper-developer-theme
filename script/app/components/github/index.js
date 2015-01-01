var React = require("react"),
    GitHub = require("../../controls/github"),
    //GitHub = require("github-api"),
    _ = require("underscore"),
    config = require("../../config"),
    moment = require("moment");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            repos: []
        };
    },
    
    componentWillMount: function() {
        var github = new GitHub(config.githubApiKey);
        github.repos().then(function(repos) {
            this.setState({ repos: repos });
        }.bind(this));
    },        
    
    renderRepos: function() {
        var counter = 0;
        return _.map(this.state.repos, function(repo) {
            return <a href={repo.url} target="_blank" key={repo.id} className="row hover-link block">
                <div className="col-md-12 padding-top-5 padding-bottom-5">
                    <div className="row">
                        <div className="col-md-12 bold">{repo.name}</div>
                    </div>
                    <div className="row light">
                        <div className="col-md-12">
                            <i className="pull-left">{repo.date}</i>
                            <div className="pull-right">
                                <i className="fa fa-star"></i>
                                <span className="spacing-left-3">{repo.starCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>;
        });
    },
    
    render: function() {
        return <div className="github padding-15 small-font box-sizing pull-left full-width">
            <h3 className="upper-case spacing-bottom-10">GitHub</h3>
            {this.renderRepos()}
        </div>;   
    }
});