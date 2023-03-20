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

    showRandomJoke() {
        if (this._jokes.length === 0) {
            console.log('The jokes storage is empty');
        } else {
            let index = Math.floor(Math.random() * this._jokes.length);
            console.log(this._jokes[index]);
        }
    }

}

let jokeStorage = new JokesStorage();
jokeStorage.showRandomJoke();