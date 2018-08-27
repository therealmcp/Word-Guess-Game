// Word chosen randomly
var words = ["ship", "independence", "cigar", "explosion", "aliens", "blue", "black", "pneumonoultramicroscopicsilicovolcanoconiosis", "invasion"];

var randWord = words[Math.floor(Math.random() * words.length)];

// Converts randWord (string) into an array
var mystWord = randWord.split('');

// Correct letters guessed by user (according to mystWord)
var rightLetter = [];

// Incorrect letters guessed by user
var wrongLetter = [];

// Correct letters displayed with blanks corresponding with mystWord
var correctWord = [];

var wins = 0;
document.getElementById("wins").innerHTML = 0;

var losses = 0;
document.getElementById("losses").innerHTML = 0;
document.getElementById("guessesLeft").innerHTML = 7;

// Display underscores for each letter of random word

var generateUnderscore = function() {
    for (var i = 0; i < mystWord.length; i++) {
        correctWord.push("_");
        }
    return correctWord;    
}

document.getElementById("wordToGuess").append(generateUnderscore());
document.getElementById("wordToGuess").innerHTML = correctWord.join(' ');

// Event that listens to letter guesses from user

document.addEventListener('keyup', function(event) {
    var userInput = String.fromCharCode(event.keyCode);
    var validLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", 
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var guessedLetter = userInput.toLocaleLowerCase();
    
    // Compares user guess against letters in random word

    if(mystWord.indexOf(guessedLetter) > -1) {
        rightLetter.push(guessedLetter);

        // If guess is correct, replace underscore with corrisponding letter

        for (var j = 0; j < correctWord.length; j++) {
            if (guessedLetter === mystWord[j]) {
                correctWord[j] = guessedLetter;
                document.getElementById("wordToGuess").innerHTML = correctWord.join(' ');
            }
        }

        // If user guesses the word before guesses left reaches zero, they win

        if (correctWord.indexOf("_") < 0) {
            wins++
            document.getElementById("wins").innerHTML = wins;
            setTimeout("alert('Nice work, Jeff Goldblum')", 500);
            setTimeout("reset()", 1000);
        }

    // If guess is wrong, add letter to wrong letters guessed and reduce the number of guesses left

    } else if (validLetter.indexOf(guessedLetter) > -1 && wrongLetter.indexOf(guessedLetter) < 0) {
            wrongLetter.push(guessedLetter);
            document.getElementById("lettersGuessed").append(guessedLetter);
            var guessesLeft = (7 - wrongLetter.length);
            document.getElementById("guessesLeft").innerHTML = guessesLeft;

        // User loses if word is not guessed by the time letters run out

        if (wrongLetter.length > 6) {
                setTimeout("alert('The world was destroyed')", 500);
                setTimeout("reset()", 1000);
                losses++;
                document.getElementById("losses").innerHTML = losses;
        };
    }
});

// Reset without refreshing the page

function reset() {
    randWord = words[Math.floor(Math.random() * words.length)];
    mystWord = randWord.split('');
    rightLetter = [];
    wrongLetter = [];
    correctWord = [];
    document.getElementById("guessesLeft").innerHTML = 7;

    var generateUnderscore = function() {
        for (var i = 0; i < mystWord.length; i++) {
            correctWord.push("_");
            }
        return correctWord;    
    }

    document.getElementById("wordToGuess").append(generateUnderscore());
    document.getElementById("wordToGuess").innerHTML = correctWord.join(' ');
    document.getElementById("lettersGuessed").innerHTML = "";
};



