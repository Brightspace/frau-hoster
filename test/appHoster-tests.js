var hoster = require('../src/appHoster.js');
var request = require('http');

describe('Free Range App hoster', function() {
	it('exports a hoster', function() {
		var h = hoster();
		expect(h).not.toBeNull();
	});

	it('hosts', function(done) {
		var h = hoster();
		h.host();
		request.get('http://localhost:3000/', function(response) {
			expect(response.statusCode).toEqual(200);
			done();
		});
	});
});