"use strict";
let remainingAttempt = 20;
let highScore = 0;
let score = 20;
let secretNumber;
document.getElementById("secret-number").hidden = true;

secretNumber = Math.floor(Math.random() * 100 + 1);
document.getElementById("secret-number").textContent = secretNumber;

function gameInit() {
  remainingAttempt = 20;
  score = 20;
  secretNumber = Math.floor(Math.random() * 100 + 1);
  document.getElementById("secret-number").textContent = secretNumber;
  document.getElementById("guess-input").disabled = false;
  document.getElementById("check-btn").disabled = false;
  document.getElementById("guess-input").value = "";
  document.getElementById("guess-paragraph").textContent = `Start guessing...`;
  document.getElementById("score-board").textContent = `💯 Score:  ${score}`;
  document.getElementById(
    "attempt-remaining"
  ).textContent = `${remainingAttempt} attempts remaining`;
}

document.getElementById("again-btn").addEventListener("click", function () {
  gameInit();
});

document.getElementById("check-btn").addEventListener("click", function () {
  const guessInput = document.getElementById("guess-input").value;
  const nGuessInput = Number(guessInput);

  if (nGuessInput === secretNumber) {
    document.getElementById(
      "guess-paragraph"
    ).textContent = `${nGuessInput} was correct, you win`;
    document.getElementById("guess-input").disabled = true;
    document.getElementById("check-btn").disabled = true;
    highScore = highScore >= score ? highScore : score;
    document.getElementById(
      "high-score"
    ).textContent = `🥇 Highscore: ${highScore}`;
  } else if (nGuessInput > secretNumber) {
    document.getElementById(
      "guess-paragraph"
    ).textContent = `${nGuessInput} was too high`;
    score -= 1;
    remainingAttempt -= 1;
    document.getElementById(
      "attempt-remaining"
    ).textContent = `${remainingAttempt} attempts remaining`;
    document.getElementById("guess-input").value = "";
  } else {
    document.getElementById(
      "guess-paragraph"
    ).textContent = `${nGuessInput} was too low`;
    score -= 1;
    remainingAttempt -= 1;
    document.getElementById(
      "attempt-remaining"
    ).textContent = `${remainingAttempt} attempts remaining`;
    document.getElementById("guess-input").value = "";
  }
  if (remainingAttempt <= 0) {
    document.getElementById("guess-paragraph").textContent =
      "game over ! you have lost.";
    document.getElementById("guess-input").disabled = true;
    document.getElementById("check-btn").disabled = true;
  }
  document.getElementById("score-board").textContent = `💯 Score:  ${score}`;
});
