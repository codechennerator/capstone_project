class Game {
    constructor() {
        this.score = {
            user: 0,
            computer: 0
        };
    }

    getScore() {
        return this.score;
    }

    updateScore(winner) {
        if (winner === 'computer' || winner === 'player') {
            this.score[winner] ++;
        } else {
            throw new Error(401);
        }
        return this.getScore();
    }
}

module.exports = Game;