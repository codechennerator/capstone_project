const request = require('request');
const assert = require('chai').assert;
const expect = require('chai').expect;
const Game = require('../logic/Game.js');
const Player = require('../logic/Player.js');
const Computer = require('../logic/Computer.js');

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
describe('Players', function() {
    describe('Player is functional', function() {
        let Player1 = new Player('Nathan');
        it('Created Nathan as Player1', function() {
            expect(Player1.name).to.equal('Nathan');
        });
        it('Nathan can make a selection from [rock, paper, scissors]', function() {
            expect(Player1.select('rock')).to.equal(0);
            expect(Player1.select('paper')).to.equal(1);
            expect(Player1.select('scissors')).to.equal(2);
        });
    });
    describe('Computer is functional', function() {
        let Computer1 = new Computer('Robot');
        it('Created Robot as ComputerPlayer', function() {
            expect(Computer1.name).to.equal('Robot');
        });
        it('Computer can make a random selection of [rock, paper, scissors]', function() {
            expect(Computer1.selectRandom()).to.be.oneOf([0, 1, 2]);
        });
    })
});
describe('Game Logic', function() {
    let testGame = new Game();
    let testPlayer1 = new Player('Player1');
    let testPlayer2 = new Player('Player2');
    describe('Game Logic is Working', function() {
        it('Should have property', function() {
            expect(testGame).to.have.property('score');
        });
        it('New Game should have scores of 0', function() {
            expect(testGame.getScore().player1).to.equal(0);
            expect(testGame.getScore().player2).to.equal(0);
        });
        it('Game should return the right winner depending on who wins', function() {
            testPlayer1.select('rock');
            testPlayer2.select('rock');
            expect(testGame.winnerTable[testPlayer1.selection][testPlayer2.selection]).to.equal('tie');
            testPlayer1.select('paper');
            testPlayer2.select('paper');
            expect(testGame.winnerTable[testPlayer1.selection][testPlayer2.selection]).to.equal('tie');
            testPlayer1.select('scissors');
            testPlayer2.select('scissors');
            expect(testGame.winnerTable[testPlayer1.selection][testPlayer2.selection]).to.equal('tie');
            testPlayer1.select('rock');
            testPlayer2.select('scissors');
            expect(testGame.checkWinner(testPlayer1.selection, testPlayer2.selection)).to.equal('player1');
        });
        it('Should Update Score', function() {
            expect(testGame.updateScore('player1').player1).to.equal(1);
        });
        it('If not updating player 1 or 2, throw error', function() {
            assert.throws(() => testGame.updateScore('ERRORRRR'), Error, "401");
        });
    });
});