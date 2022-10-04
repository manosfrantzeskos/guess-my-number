"use strict";

const SCORE = 20;
let magicNumber = generateMagicNumber();

const bodyElement     = document.querySelector("body");
const startAgainBtn   = document.querySelector(".again");
const checkNumberBtn  = document.querySelector(".check");
const messageArea     = document.querySelector(".message");
const guessedInputNum = document.querySelector(".guess");
const scoreBoard      = document.querySelector(".score");
const highScore       = document.querySelector(".highscore");
const titleText       = document.querySelector("h1 span");


function generateMagicNumber() {
    return Math.floor(Math.random() * 20) + 1;
}


function setInitialValues() {
    messageArea.textContent = "Start guessing...";
    guessedInputNum.value = "";
    bodyElement.style.backgroundColor = "#222";
    scoreBoard.textContent = SCORE;
    checkNumberBtn.removeAttribute("disabled");
    titleText.textContent = "Guess My Number";
    magicNumber = generateMagicNumber();
}


function isGuessCorrect() {    
    if (!guessedInputNum.value) return;

    let userInputNum = parseInt(guessedInputNum.value);

    if (scoreBoard.textContent > 0) {
        if (userInputNum > magicNumber) {
            messageArea.textContent = "📈 Too high!";
            scoreBoard.textContent -= 2;
        }
        else if (userInputNum < magicNumber) {
            messageArea.textContent = "📉 Too low!";        
            scoreBoard.textContent -= 2;
        }
        else {
            messageArea.textContent = "🎉 Correct number!";
            bodyElement.style.backgroundColor = "#60b347";
            checkNumberBtn.setAttribute("disabled", true);
            if (scoreBoard.textContent > highScore.textContent) {
                highScore.textContent = scoreBoard.textContent;
            }
            titleText.textContent = "You Win!";
        }
    }
    else {
        titleText.textContent = "Game Over";
        bodyElement.style.backgroundColor = "#f00";
    }

}


startAgainBtn.addEventListener("click", setInitialValues);
checkNumberBtn.addEventListener("click", isGuessCorrect);