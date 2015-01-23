"use strict";

module.exports = new function() {
	this.centre = function(url, name, options) {
		options.width = options.width || 600;
		options.height = options.height || 400;
		options.left = window.innerWidth/2 - options.width/2;
		options.top = window.innerHeight/2 - options.height/2;
		window.open(url, name, _buildParametersFromOptions(options));	
	};
	
	function _buildParametersFromOptions(options) {
		var str = "";
		for (var name in options)
			str += name + "=" + options[name] + ",";
		return str.substring(0, str.length-1);
	}
}();