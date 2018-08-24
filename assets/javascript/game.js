// Word chosen randomly
var words = ["ball", "skunk", "window"];

var randWord = words[Math.floor(Math.random() * words.length)];
console.log(randWord);

var underscore = [];
var rightLetter = [];
var wrongLetter = [];

// Display underscores for each letter of random word

var generateUnderscore = function() {
    for (var i = 0; i < randWord.length; i++) {
        underscore.push("_");
    }
    return underscore;    
}

console.log(generateUnderscore());

// Event that listens to letter guesses from user

document.addEventListener('keydown', function(event) {
    var userInput = String.fromCharCode(event.keyCode);
    var guessedLetter = userInput.toLocaleLowerCase();
    console.log(guessedLetter);
    
    // Compares user guess against letters in random word

    if(randWord.indexOf(guessedLetter) > -1) {
        rightLetter.push(guessedLetter);

        // If guess is correct, replace underscore with corrisponding letter

        underscore[randWord.indexOf(guessedLetter)] = randWord;

        if (underscore.join('') == randWord) {
            alert("You Win");
        }
        console.log(rightLetter);

        // If guess is wrong, add letter to wrong letters guessed and reduce the number of guesses left

    } else {
        wrongLetter.push(guessedLetter);
        console.log(wrongLetter);
    }
});

// If user guesses the word before guesses left reaches zero, the win

// User loses if word is not guessed by the time letters run out
