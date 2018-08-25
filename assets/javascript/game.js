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

document.getElementById("guessesLeft").innerHTML = 7;

// Display underscores for each letter of random word

var generateUnderscore = function() {
    for (var i = 0; i < mystWord.length; i++) {
        correctWord.push(" _ ");
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

        for (var j = 0; j < blanks; j++) {
            if (guessedLetter === mystWord[j]) {
                document.getElementById("wordToGuess").innerHTML = correctWord.join(' ');
                correctWord[rightLetter.indexOf(guessedLetter)] = guessedLetter;
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

        var guessesLeft = (7 - wrongLetter.length);
        document.getElementById("guessesLeft").innerHTML = guessesLeft;

        // User loses if word is not guessed by the time letters run out

        if (wrongLetter.length > 6) {
                alert("Click OK to try again");
                reset();
        };
    }
});

// Reset without refreshing the page
function reset() {
    var randWord = words[Math.floor(Math.random() * words.length)];

    console.log(randWord);
    var mystWord = randWord.split('');

    var blanks = [];

    var rightLetter2 = rightLetter;
    rightLetter = [];

    var wrongLetter2 = wrongLetter;
    wrongLetter = [];

    var correctWord = [];

    document.getElementById("guessesLeft").innerHTML = 7;

    var generateUnderscore = function() {
        for (var i = 0; i < mystWord.length; i++) {
            correctWord.push(" _ ");
            }
        return correctWord;    
    }

    document.getElementById("wordToGuess").append(generateUnderscore());

    document.getElementById("wordToGuess").innerHTML = correctWord.join(' ');

    document.getElementById("lettersGuessed").innerHTML = "";
};



