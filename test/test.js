const request = require('request');
const assert = require('assert');

let base = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:3000';

describe('Hello World Test', function() {
    describe('GET /', function() {
        it("returns status code 200", function(done) {
            request.get(base, function(error, response, body) {
              assert.equal(200, response.statusCode);
              done();
            });
        });
    });
});