let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessForm = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const prevGuessesDisplay = document.getElementById('prevGuesses');
const remainingGuessesDisplay = document.getElementById('remainingGuesses');
const restartBtn = document.getElementById('restartBtn');

let prevGuesses = [];
let maxAttempts = 10;
let attemptsLeft = maxAttempts; //because we want to keep track of how many attempts the user has left, and we start with the maximum number of attempts.
let isGameOver = false; //because we want to keep track of whether the game is over or not, and we start with the game not being over.

guessForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (isGameOver) return;

    const guess = parseInt(guessInput.value, 10);

    // Validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
        showMessage('Please enter a valid number between 1 and 100.', 'high');
        return;
    }

    // Check for duplicate guess
    if (prevGuesses.includes(guess)) {
        showMessage('You already guessed that number!', 'low');
        return;
    }

    // Process valid guess
    prevGuesses.push(guess);
    attemptsLeft--;

    updateStats();

    // Check win/loss conditions
    if (guess === randomNumber) {
        showMessage(`🎉 Correct! The number was ${randomNumber}!`, 'win');
        endGame();
    } else if (attemptsLeft === 0) {
        showMessage(`Game Over! The number was ${randomNumber}.`, 'high');
        endGame();
    } else if (guess < randomNumber) {
        showMessage('Too low! Try higher ⬆️', 'low');
    } else {
        showMessage('Too high! Try lower ⬇️', 'high');
    }

    guessInput.value = ''; // clears the input field after each guess
    guessInput.focus(); // sets the focus back to the input field for the next guess
});

// this function is used to display messages to the user based on their guess. 
// It takes two parameters: 'text' which is the message to be displayed, and 'type' which determines the styling of the message (e.g., 'win', 'low', 'high').
function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
}

// this function updates the display of previous guesses and remaining attempts.
function updateStats() {
    prevGuessesDisplay.textContent = prevGuesses.join(', ');
    remainingGuessesDisplay.textContent = attemptsLeft;
}

// this function is called when the game ends, either by winning or losing. It disables the input and submit button, and shows the restart button.
function endGame() {
    isGameOver = true;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.classList.remove('hidden');
}

// this event listener is attached to the restart button. When clicked, it resets the game state and UI elements to allow the user to play again.
restartBtn.addEventListener('click', function () {
    // Reset Game State
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    attemptsLeft = maxAttempts;
    isGameOver = false;

    // Reset UI
    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.value = '';
    message.textContent = '';
    message.className = 'message';
    prevGuessesDisplay.textContent = 'None';
    remainingGuessesDisplay.textContent = maxAttempts;
    restartBtn.classList.add('hidden');

    guessInput.focus();
});