// Word chosen randomly
var words = ["ball", "skunk", "window"];

var randWord = words[Math.floor(Math.random() * words.length)];

console.log(randWord);

// Converts randWord (string) into an array
var mystWord = randWord.split('');

// Blanks in the word chosen by comp (mystWord)
var blanks = [];

// Correct letters guessed by user (according to mystWord)
var rightLetter = [];

// Incorrect letters guessed by user
var wrongLetter = [];

// Correct letters displayed with blanks corresponding with mystWord
var correctWord = [];

// Display underscores for each letter of random word

var generateUnderscore = function() {
    for (var i = 0; i < mystWord.length; i++) {
        correctWord.push(" _ ");
        document.getElementById("wordToGuess").innerHTML = correctWord;
    }
    return correctWord;    
}

document.getElementById("wordToGuess").innerHTML = correctWord.join(' ');

document.getElementById("wordToGuess").append(generateUnderscore());

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

        for (var j = 0; j < blanks; j++) {
            if (mystWord[j] === guessedLetter) {
                correctWord[j] = guessedLetter;
                document.getElementById('wordToGuess').innerHTML = correctWord.join(' ');
                /* underscore[rightLetter.indexOf(guessedLetter)] = guessedLetter; */
            }
        }

        console.log(correctWord);

        // If user guesses the word before guesses left reaches zero, they win

        /* if (correctWord == mystWord) {
            alert("You Win");
        } */

    // If guess is wrong, add letter to wrong letters guessed and reduce the number of guesses left

    } else if (randWord.indexOf(guessedLetter) < 0 && validLetter.indexOf(guessedLetter) > -1) {
        wrongLetter.push(guessedLetter);
        document.getElementById("lettersGuessed").append(guessedLetter);

        console.log(wrongLetter);

        if (wrongLetter.length > 6) {
                alert("You lose, refresh to try again.")
        };
    }
});

function reset() {
    document.getElementById("guessesLeft").innerHTML = 0;
}



// User loses if word is not guessed by the time letters run out
