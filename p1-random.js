/*
    CIT 281 Project 1
    Name: Connor Pfeiffer
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function random() {
    let randomString = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) { //between 5 and 25 characters
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // all possible letters
        const randomLetter = letters[getRandomInteger(0, 52)]; // pick a random letter from string
        randomString += randomLetter; // adds letter to end of string
    }
    console.log(randomString) // prints random string
}

random();