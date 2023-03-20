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

jokeStorage.addJoke("If a child refuses to nap, are they guilty of resisting a rest?");
jokeStorage.addJoke("What country's capital is growing the fastest? Ireland. Every day it's Dublin.");
jokeStorage.addJoke("I once had a dream I was floating in an ocean of orange soda. It was more of a fanta sea.");
jokeStorage.addJoke("Did you know corduroy pillows are in style? They're making headlines.");
jokeStorage.addJoke("Did you hear about the kidnapping at school? It's okay, he woke up.");
jokeStorage.addJoke("A cheeseburger walks into a bar. The bartender says, 'Sorry, we don't serve food here.'");
jokeStorage.addJoke("I once got fired from a canned juice company. Apparently I couldn't concentrate.");
jokeStorage.addJoke("I used to play piano by ear. Now I use my hands.");
jokeStorage.addJoke("Have you ever tried to catch a fog? I tried yesterday but I mist.");
jokeStorage.addJoke("I'm on a seafood diet. I see food and I eat it.");
jokeStorage.addJoke("Why did the scarecrow win an award? Because he was outstanding in his field.");
jokeStorage.addJoke("I made a pencil with two erasers. It was pointless.");
jokeStorage.addJoke("How do you make a Kleenex dance? Put a little boogie in it!");
jokeStorage.addJoke("I'm reading a book about anti-gravity. It's impossible to put down!");
jokeStorage.addJoke("Did you hear about the guy who invented the knock-knock joke? He won the 'no-bell' prize.");

jokeStorage.showRandomJoke();