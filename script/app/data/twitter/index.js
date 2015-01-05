var qwest = require("qwest"),
    cache = require("../cache"),
    
    moment = require("moment");

var CACHE_KEY = "twitter";

module.exports = function(serviceLocation) {
    this.recent = function() {
        return cache.get(CACHE_KEY) || qwest.get(serviceLocation + "twitter").then(function() {
            return JSON.parse(this.responseText);
        }).then(function(tweets) {
            cache.set(CACHE_KEY, tweets, moment().add(1, "hour").toDate());
            return tweets;
        });
    };
};