// casper.test.begin(testTitle, numberOfTests, callback)
casper.test.begin('Testing Google', 1, function (test) {

	casper.start('http//:google.com');

	casper.then(function () {
		test.assertTitle('Google', 'Google has correct title');
		console.log("Result: " + this.getTitle());

	});

	casper.run(function () {

		//var fs = require('fs');
		//fs.write('results.txt', ("This " + this.getTitle()));

		test.done();
	})
});

