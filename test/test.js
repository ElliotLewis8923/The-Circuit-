process.env.NODE_ENV = 'test';

var server = require('../app');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie')


describe('Homepage', function() {
	var browser;

	before(function() {
		server = server.listen(3000);
		browser = new Browser()

	});

	it('should display a header', function() {
		browser.visit("http://localhost:3000/", function() {
			expect(browser.text('header')).to.eql('The Circuit');
		});
	});


});