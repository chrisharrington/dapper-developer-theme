var _ = require("underscore"),
    moment = require("moment");

module.exports = {
    repos: function(repos) {
        return _.map(repos, function(repo) {
            return {
                id: repo.id,
                date: moment(repo.pushed_at).format("DD/MM/YYYY HH:mm:ss"),
                url: repo.html_url,
                name: repo.name,
                starCount: repo.stargazers_count
            };
        });
    }
};