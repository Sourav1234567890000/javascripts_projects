// generate random number once
let compGeneratedRandomNum = Math.floor(Math.random() * 100) + 1;

// store DOM elements once
const submitGuess = document.querySelector("#subt");
const guessField = document.querySelector("#guessField");
const display = document.querySelector("#display");
const lastResult = document.querySelector(".lastResult");
const guessesList = document.querySelector(".guesses");
const restartButton = document.querySelector("#restartBtn");

const maxAttempt = 10;
let attemptsLeft = maxAttempt;

function controller() {
  submitGuess.addEventListener("click", function (e) {
    e.preventDefault();
    let inpValue = parseInt(guessField.value);
    if (validateFields(inpValue)) return;
    if (gameOver()) return;
    if (checkGuess()) return;
  });
  restartButton.addEventListener("click", playAgain);
}

function validateFields(inpValue) {
  if (inpValue > 100 || inpValue <= 0 || isNaN(inpValue)) {
    display.innerHTML = `<span>Please enter validate number</span>`;
    guessField.value = "";
    setTimeout(() => {
      display.innerHTML = "";
    }, 2000);
    return true;
  }
  return false;
}

function gameOver() {
  if (attemptsLeft === 0) {
    display.innerHTML = `<span>Game Over! Refresh to play again</span>`;
    guessField.disabled = true;
    submitGuess.disabled = true;
    playAgain();
    return true;
  }
  return false;
}

function checkGuess() {
  const userInput = parseInt(guessField.value);
  const difference = compGeneratedRandomNum - userInput;

  attemptsLeft--;
  lastResult.innerHTML = attemptsLeft;

  if (difference === 0) {
    display.innerHTML = `<span>🎉 Hurray! You guessed it correct</span>`;
    submitGuess.style.display = "none";
    return true;
  }
  giveHint(difference);
  guessListUpdate(userInput);
  return false;
}

function giveHint(difference) {
  if (Math.abs(difference) <= 10) {
    if (difference > 0) {
      display.innerHTML = `<span>🔥 Very close! Just increase a little</span>`;
    } else {
      display.innerHTML = `<span>🔥 Very close! Just decrease a little</span>`;
    }
  } else {
    if (difference > 0) {
      display.innerHTML = `<span>The number is higher, try again</span>`;
    } else {
      display.innerHTML = `<span>The number is lower, try again</span>`;
    }
  }
}

function guessListUpdate(userInput) {
  guessField.value = "";
  guessesList.innerHTML += ` ${userInput} `;
}

function playAgain() {
  // reset attempts
  attemptsLeft = maxAttempt;
  lastResult.innerHTML = attemptsLeft;

  // generate new random number
  compGeneratedRandomNum = Math.floor(Math.random() * 100) + 1;
  console.log("New number:", compGeneratedRandomNum);

  // clear UI
  display.innerHTML = "";
  guessesList.innerHTML = "";
  guessField.value = "";

  // enable controls
  guessField.disabled = false;
  submitGuess.disabled = false;

  // if you hid button earlier, show it again
  submitGuess.style.display = "inline-block";
}

controller();
