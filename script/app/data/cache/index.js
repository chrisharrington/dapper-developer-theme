var moment = require("moment");

module.exports = new function() {
    this._values = {};
    
    this.get = function(key) {
        var stored = JSON.parse(window.localStorage.getItem(key));
        if (stored && moment() > moment(stored.expiry)) {
            window.localStorage.removeItem(key);
            stored = undefined;
        }
        
        var promise = {
            then: function(callback) {
                callback(stored.values);
            }
        };
        
        return stored ? promise : undefined;
    };
    
    this.set = function(key, values) {
        window.localStorage.setItem(key, JSON.stringify({ values: values, expiry: moment().add(15, "m") }));
    };
};