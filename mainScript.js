// Variables from html
const containerButtons = document.querySelector(".userOptions");
const winnerOutput = document.querySelector(".outputBox");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const submitButton = document.querySelector("#submit");
const restartButton = document.querySelector("#restart");

// Variables for js
let computerInput
let userInput
let finalWinner
let endFinal
let computerGuess


function main() {

    // Get computers guess
    computerGuess = Math.floor((Math.random() * 3) + 1);
    switch(computerGuess) {
    case 1:
        computerInput = "rock";
        break;
    case 2:
        computerInput = "paper";
        break;
    case 3:
        computerInput = "scissors";
        break;
    default:
        computerInput = "Error with computerGuess switch case";
        break;
    }
    console.log(computerInput);

    // Gets the users choice
    rockButton.onclick = () => {
        userInput = "rock";
        console.log(userInput + "user input");
        rockButton.setAttribute("style", "background-color: grey;")
        paperButton.setAttribute("style", "background-color: buttonface;")
        scissorsButton.setAttribute("style", "background-color: buttonface;")
    };

    paperButton.onclick = () => {
        userInput = "paper";
        console.log(userInput + "user input");
        rockButton.setAttribute("style", "background-color: buttonface;")
        paperButton.setAttribute("style", "background-color: grey;")
        scissorsButton.setAttribute("style", "background-color: buttonface;")
    };

    scissorsButton.onclick = () => {
        userInput = "scissors";
        console.log(userInput + "user input");
        rockButton.setAttribute("style", "background-color: buttonface;")
        paperButton.setAttribute("style", "background-color: buttonface;")
        scissorsButton.setAttribute("style", "background-color: grey;")
    };

    // Finds the winner
    if(userInput == computerInput) {
        finalWinner = "You both chose ${userInput} .";
    }
    else {
        finalWinner = "Error calculating results"
    }
    return finalWinner
}

// Restart and submit buttons functionality
restartButton.onclick = () => {
    endFinal = main();
    
}

submitButton.onclick = () => {
    finalOutut = (endFinal);
    console.clear();
    rockButton.setAttribute("style", "background-color: buttonface;")
    paperButton.setAttribute("style", "background-color: buttonface;")
    scissorsButton.setAttribute("style", "background-color: buttonface;")
};

//Change colors of buttons when pressed
restartButton.addEventListener('mousedown', function(event) {
    // Change the button style when it's pressed down
    restartButton.style.backgroundColor = "grey";
});
restartButton.addEventListener('mouseup', function(event) {
    // Change the button style when it's pressed down
    restartButton.style.backgroundColor = "buttonface";
});
submitButton.addEventListener('mousedown', function(event) {
    // Change the button style when it's pressed down
    submitButton.style.backgroundColor = "grey";
});
submitButton.addEventListener('mouseup', function(event) {
    // Change the button style when it's pressed down
    submitButton.style.backgroundColor = "buttonface";
});
