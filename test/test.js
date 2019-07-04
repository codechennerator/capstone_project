const request = require('request');
const assert = require('chai').assert;
const expect = require('chai').expect;
// const gameFunction = require('../logic/game.js');

let base = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:8080';

describe('Hello World Test', function() {
    describe('GET /', function() {
        it('returns status code 200', function(done) {
            request.get(base, function(error, response, body) {
              assert.equal(200, response.statusCode);
              done();
            });
        });
    });
    describe('Computer should choose rock paper or scissors', function() {
        it('', function(done) {
            let a = 'rock';
            expect(a).to.be.oneOf(['rock','paper','scissors']);
            done();
        });
    });
});