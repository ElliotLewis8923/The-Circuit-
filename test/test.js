process.env.NODE_ENV = 'test';

var server = require('../app');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie')

// db
//   .sequelize
//   .sync({ force: true })
//   .complete(function(err) {
//     if (err) {
//       throw err[0]
//     } else {
//       http.createServer(app).listen(app.get('port'), function(){
//         console.log('Express server listening on port ' + app.get('port'))
//       })
//     }
//   })


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