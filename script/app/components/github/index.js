var React = require("react"),
    Widget = require("components/widget"),
    GitHub = require("data/github"),
    _ = require("underscore"),
    config = require("config"),
    moment = require("moment");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            repos: [],
            moreVisible: false
        };
    },
    
    componentWillMount: function() {
        var github = new GitHub(config.serviceLocation);
        github.repos().then(function(repos) {
            this.setState({ repos: repos });
        }.bind(this));
    },
    
    toggleMore: function() {
        this.setState({ moreVisible: !this.state.moreVisible });  
    },
    
    renderRepos: function(start, end) {
        if (this.state.repos.length === 0)
            return "";
        
        var counter = start;
        end = end || this.state.repos.length;
        
        var repos = [];
        for (var i = start; i < end; i++) 
            repos.push(this.renderRepo(this.state.repos[i]));
        return repos;
    },
    
    render: function() {
        return <Widget title="GitHub" hidden={this.state.repos.length === 0}>
            {this.renderRepos(0, 5)}
            <div className={"more " + (this.state.moreVisible ? "" : "hidden")}>
                {this.renderRepos(6)}
            </div>
            <div className="row">
                <div className="col-md-12 text-right spacing-top-10">
                    <a onClick={this.toggleMore}>{this.state.moreVisible ? "less" : "more"}...</a>
                </div>
            </div>
        </Widget>;
    },
                       
    renderRepo: function(repo) {
        return <a href={repo.url} target="_blank" key={repo.id} className="row hover-link block">
            <div className="col-md-12 padding-top-5 padding-bottom-5">
				<div className="pull-left">
					<h5 className="secondary-colour pull-left">{repo.name}</h5>
					<br />
					<span className="pull-left tiny-font light">{moment(repo.date).fromNow()}</span>
				</div>
				<div className="pull-right light small-font">
					<i className="fa fa-star"></i>
					<span className="spacing-left-3">{repo.starCount}</span>
				</div>
                
            </div>
        </a>;
    }

});