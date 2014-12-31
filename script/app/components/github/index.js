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
//            return <a href={repo.url} target="_blank" key={repo.id} className="pull-left full-width box-sizing wide-padding-5 hover">
//                <span className="pull-left">{repo.name}</span>
//                <span className="pull-right spacing-left-3 light">{repo.starCount}</span>
//                <i className="fa fa-star pull-right spacing-top-3 light"></i>
//                <i className="pull-left full-width spacing-top-3 light small">{repo.date}</i>
//            </a>;
            
            return <a href={repo.url} target="_blank" key={repo.id} className="row hover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8">{repo.name}</div>
                        <div className="col-md-4 text-right light">
                            <i className="fa fa-star"></i>
                            {repo.starCount}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">{repo.date}</div>
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