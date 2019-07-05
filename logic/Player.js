class Player {
    constructor(name) {
        this.name = name;
        this.selection;
        this.options = ['rock','paper','scissors'];
    }

    select(selection) {
        if( this.options.indexOf(selection) !== -1) {
            this.selection = this.options.indexOf(selection);
        }
        return this.selection;
    }
}

module.exports = Player;