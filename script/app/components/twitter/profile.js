"use strict";

var React = require("react");

module.exports = React.createClass({
    renderImage: function(profile) {
        return <div className="profile-image">
            <img src={profile.image} alt="profile-image" />
        </div>;
    },
    
    renderInfo: function(profile) {
        return <div className="profile-info">
            <span className="bold">{profile.name}</span>
            <br />
            <a href={"https://twitter.com/" + profile.screenName} target="_blank" className="spacing-top-5 small-font">@{profile.screenName}</a>
        </div>
    },

    render: function() {
        var profile = this.props.profile;
        return <div className="row padding-bottom-15 border-bottom spacing-bottom-15">
            <div className="col-xs-12 profile">
                {this.renderImage(profile)}
                {this.renderInfo(profile)}
            </div>
        </div>;
    }
});