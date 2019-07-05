class Game {
    constructor() {
        this.score = {
            player1: 0,
            player2: 0
        };
        this.winnerTable = [['tie', 'player2', 'player1'],
                            ['player1', 'tie', 'player2'],
                            ['player2', 'player1', 'tie']];
    }

    getScore() {
        return this.score;
    }

    updateScore(winner) {
        if (winner === 'player1' || winner === 'player2') {
            this.score[winner] ++;
        } else {
            throw new Error(401);
        }
        return this.score;
    }

    checkWinner(p1Selection, p2Selection) {
        let winner = this.winnerTable[p1Selection][p2Selection];
        if ( winner === 'player1' || winner === 'player2') {
            return winner;
        }
        return false;
    }

}

module.exports = Game;