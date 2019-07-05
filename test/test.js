const request = require('request');
const assert = require('chai').assert;
const expect = require('chai').expect;
const Game = require('../logic/game.js');

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
});
describe('New Game', function() {
    let newGame = new Game();
    it('Should have property', function() {
        expect(newGame).to.have.property('score');
    });
    it('New Game should have scores of 0', function() {
        expect(newGame.getScore().user).to.equal(0);
        expect(newGame.getScore().computer).to.equal(0);
    });
    it('Should Update Score', function() {
        expect(newGame.updateScore('computer').computer).to.equal(1);
    });
    it('If not player or computer, throw error', function() {
        assert.throws(() => newGame.updateScore('ERRORRRR'), Error, "401");
    });
});