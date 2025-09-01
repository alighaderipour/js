'use strict';
let score;
let attemptRemaining;
let highScore;
let randomNumber;

function gameInit(){
    score = 20;
    attemptRemaining = 20;
    highScore;
    randomNumber = Math.floor(Math.random() * 100);
    document.getElementById('show-randomNumber').textContent = randomNumber;
}

gameInit();

document.getElementById('again-btn').addEventListener('click', function(){
    score =20;
    document.getElementById('feedback-p').textContent='start again';
    document.getElementById('guess-input').value = '';
    attemptRemaining = 20;
    document.getElementById(
      'attempt-remaining'
    ).textContent = `${attemptRemaining} remaining`;;
    gameInit();
});


document.getElementById('check-btn').addEventListener('click', function(){
    let stringUserGuess = document.getElementById('guess-input').value;
    const userGuess = Number(stringUserGuess);
    if(userGuess === randomNumber){
        console.log('correct');
        highScore = highScore>=score? highScore : score
        document.getElementById('high-score').textContent=`🥇 Highscore:${highScore}`;
        gameInit();


    }
    else if (userGuess < randomNumber){
        document.getElementById('feedback-p').textContent= `${userGuess} was too low`;
        document.getElementById('guess-input').value = '';
        attemptRemaining -= 1;
        score -=1;
    }
    else{
        document.getElementById('feedback-p').textContent = `${userGuess} was too high`;
        document.getElementById('guess-input').value = '';
        attemptRemaining -= 1;
        score -=1;
    }
    document.getElementById(
      'attempt-remaining'
    ).textContent = `${attemptRemaining} remaining`;
    
    document.getElementById('score-board').textContent = `current score : ${score}`;

    if (attemptRemaining ===0){
          document.getElementById('guess-input').disabled = true;
          document.getElementById('check-btn').disabled = true;
          document.getElementById('feedback-p').textContent = 'Game Over! You have no attempt remaining';
    }
    
});

