'use strict';

var os = require('os');
var express = require('express');
var cors = require('cors');

function getHostname(opts) {
	var hostname = opts.hostname || os.hostname();
	if(hostname.indexOf('.local', hostname.length-6) !== -1) {
		hostname = hostname.substr(0, hostname.length-6);
	}
	return hostname;
}

function LocalAppHoster( opts ) {
	opts.hostname = getHostname(opts);
	opts.port = opts.port || 3000;
	opts.dist = opts.dist || 'dist';
	this._opts = opts;
}

LocalAppHoster.prototype.host = function() {
	var self = this;

	var app = express();

	app.use( cors() );

	app.get('/', function (req, res) {
		res.sendStatus(200);
	});

	var server = app.listen(self._opts.port, function() {
		var host = server.address().address;
		var port = server.address().port;
		//console.log('FRAster listening at http://%s:%s', host, port);
	});
};

module.exports = function( opts ) {
	return new LocalAppHoster( opts || {} );
};