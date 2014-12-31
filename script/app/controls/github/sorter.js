var _ = require("underscore");

module.exports = {
    repos: function(repos) {
        return _.sortBy(repos, function(repo) {
            return new Date(repo.pushed_at).getTime()*-1;
        });
    }
};