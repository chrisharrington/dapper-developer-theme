var qwest = require("qwest"),
    cache = require("../cache"),
    
    moment = require("moment");

var CACHE_KEY = "github";

module.exports = function(serviceLocation) {
    this.repos = function() {
        return cache.get(CACHE_KEY) || qwest.get(serviceLocation + "github").then(function() {
            return JSON.parse(this.responseText);
        }).then(function(repos) {
            cache.set(CACHE_KEY, repos, moment().add(1, "hour").toDate());
            return repos;
        });
    };
};