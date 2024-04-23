// Variables from html
const containerButtons = document.querySelector(".userOptions");
const winnerOutput = document.querySelector(".outputBox");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const submitButton = document.querySelector("#submit");

// Variables for js
let computerInput
let userInput
let finalWinner = "undefined"
let endFinal
let computerGuess


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


function main(userInput) {

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

    // Finds the winner
    if(userInput == computerInput) {
        finalWinner = `You both chose ${userInput} .`;
    } else if(userInput == "rock" & computerInput == "scissors") {
        finalWinner = `You won! You chose ${userInput} and the computer chose ${computerInput} .`;
    } else if(userInput == "paper" & computerInput == "rock") {
        finalWinner = `You won! You chose ${userInput} and the computer chose ${computerInput} .`;
    } else if(userInput == "scissors" & computerInput == "paper") {
        finalWinner = `You won! You chose ${userInput} and the computer chose ${computerInput} .`;
    } else if(finalWinner == "undefined" || finalWinner == "Error calculating results. You likely pressed submit without selecting an option, please make sure to select an option.") {
        finalWinner = "Error calculating results. You likely pressed submit without selecting an option, please make sure to select an option.";
    } else {
        finalWinner = `You lost! You chose ${userInput} and the computer chose ${computerInput} .`;
    }
    return finalWinner

}

//Submit button functionality
submitButton.onclick = () => {
    endFinal = main(userInput);
    winnerOutput.textContent = (endFinal);
    rockButton.setAttribute("style", "background-color: buttonface;")
    paperButton.setAttribute("style", "background-color: buttonface;")
    scissorsButton.setAttribute("style", "background-color: buttonface;")
    console.log(finalWinner)
};


//Change colors of submit button when pressed
submitButton.addEventListener('mousedown', function(event) {
    // Change the button style when it's pressed down
    submitButton.style.backgroundColor = "grey";
});
submitButton.addEventListener('mouseup', function(event) {
    // Change the button style when it's pressed down
    submitButton.style.backgroundColor = "buttonface";
});