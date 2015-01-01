var qwest = require("qwest"),
    mapper = require("./mapper"),
    sorter = require("./sorter"),
    cache = require("../cache"),
    
    moment = require("moment");

var API_LOCATION = "https://api.github.com/",
    CACHE_KEY = "github";

module.exports = function(token) {
    if (!token)
        throw new Error("An oauth token is required.");
    
    this._token = token;
    
    this.repos = function() {
        return cache.get(CACHE_KEY) || qwest.get(API_LOCATION + "users/chrisharrington/repos", null, {
            headers: {
                "Authorization": "token " + this._token
            }
        }).then(function() {
            return sorter.repos(JSON.parse(this.responseText));
        }).then(function(sorted) {
            return mapper.repos(sorted);
        }).then(function(mapped) {
            cache.set(CACHE_KEY, mapped, moment().add(1, "month").toDate());
            return mapped;
        });
    };
};