class JokesStorage {
    constructor(){
        this._jokes = [];
    }

    get jokes() {
        return this._jokes;
    }

    addJoke(newJoke) {
        if (typeof newJoke === 'string') {
            this._jokes.push(newJoke);
        } else {
            console.log('The joke needs to be a string');
        }
    }

    removeAllJokes() {
        this._jokes = [];
    }

    removeLastJoke() {
        this._jokes.pop();
    }

}
