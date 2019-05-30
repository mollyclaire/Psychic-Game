// Create an array of letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Declare global variables
var guesses = [];
var wins = 0;
var losses = 0;
var remaining = 10;

// Create variables that hold references to the places in the HTML where we want to display things
var alreadyGuessed = document.getElementById("alreadyGuessed");
var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var remainingGuesses = document.getElementById("remainingGuesses");

// Computer randomly selects a letter (print the letter to the console)
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

// Reset Game
function reset() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);
    remainingGuesses.textContent = 10;
    alreadyGuessed.textContent = "";
}

// User types a letter
document.onkeyup = function(event) {
    var userGuess = event.key;

    // Add the letter to "Your guesses so far"
    guesses.push(userGuess);
    alreadyGuessed.textContent = guesses; 
    console.log(guesses); 

    // Does the user letter match the computer letter?
    // If yes, add a point to "Wins" && reset game
    if (userGuess === computerGuess) {
        wins++;
        winText.textContent = wins++;
        reset();
 
    // If no, subtract a point from "Remaining guesses"
    } else {
        remainingGuesses.textContent = remaining--;
        }  

    // If "Remaining guesses = 0", alert the user they have lost
    if (remaining === 0) {
        losses++;
        lossText.textContent = losses++;
        remaining = 10;
        guesses = [];
        reset();
        
    }  
}