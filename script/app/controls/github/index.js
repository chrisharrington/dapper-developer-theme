var qwest = require("qwest"),
    mapper = require("./mapper"),
    sorter = require("./sorter");

var API_LOCATION = "https://api.github.com/";

module.exports = function(token) {
    if (!token)
        throw new Error("An oauth token is required.");
    
    this._token = token;
    
    this.repos = function() {
        return qwest.get(API_LOCATION + "user/repos", null, {
            headers: {
                "Authorization": "token " + this._token
            }
        }).then(function() {
            return sorter.repos(JSON.parse(this.responseText));
        }).then(function(sorted) {
            return mapper.repos(sorted);
        }).catch(function() {
            console.log("error");
        });
    };
};