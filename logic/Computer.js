const Player = require('./Player');

class Computer extends Player {
    constructor(name) {
        super(name);
    }

    selectRandom() {
        this.selection = Math.floor(Math.random() * Math.floor(2));
        return this.selection;
    }
}

module.exports = Computer;