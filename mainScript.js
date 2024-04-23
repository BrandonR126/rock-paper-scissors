// Variables from html
const containerButtons = document.querySelector(".userOptions");
const winnerOutput = document.querySelector(".outputBox");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const submitButton = document.querySelector("#submit");
const buttons = document.querySelectorAll('button');


// Variables for js
let computerInput
let userInput = "undefined"
let finalWinner


// Gets the users choice
rockButton.onclick = () => {
    userInput = "rock";
    console.log(userInput + "user input");
};

paperButton.onclick = () => {
    userInput = "paper";
    console.log(userInput + "user input");
};

scissorsButton.onclick = () => {
    userInput = "scissors";
    console.log(userInput + "user input");
};


function main(userInput) {
    // Get computers guess
    switch(Math.floor((Math.random() * 3) + 1)) {
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
        finalWinner = `You both chose ${userInput} . You tied.`;
    } else if(userInput === "rock" && computerInput === "scissors") {
        finalWinner = `You won! You chose ${userInput} and the computer chose ${computerInput} .`;
    } else if(userInput === "paper" && computerInput === "rock") {
        finalWinner = `You won! You chose ${userInput} and the computer chose ${computerInput} .`;
    } else if(userInput === "scissors" && computerInput === "paper") {
        finalWinner = `You won! You chose ${userInput} and the computer chose ${computerInput} .`;
    } else if(userInput === "undefined" || finalWinner === "Error calculating results. You likely pressed submit without selecting an option, please make sure to select an option.") {
        finalWinner = "Error calculating results. You likely pressed submit without selecting an option, please make sure to select an option.";
    } else {
        finalWinner = `You lost! You chose ${userInput} and the computer chose ${computerInput} .`;
    }
    return finalWinner

}

//Submit button functionality
submitButton.onclick = () => {
    winnerOutput.textContent = (main(userInput));
    userInput = "undefined";
    
    console.log(finalWinner)
};


// UI

// Change color of buttons when pressed
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(button.id !== 'submit') {
            // Change color of the clicked button
            this.style.backgroundColor = 'grey';
    
            // Change color of other buttons
            buttons.forEach(otherButton => {
            if(otherButton !== this) {
                otherButton.style.backgroundColor = 'buttonface';
            }
            });
        }
    });
    });

//Change colors of submit button when pressed
submitButton.addEventListener('mousedown', function(event) {
    // Change the button style when it's pressed down
    submitButton.style.backgroundColor = "grey";
});
submitButton.addEventListener('mouseup', function(event) {
    submitButton.style.backgroundColor = "buttonface";
    buttons.forEach(button => {
        if(button !== submitButton) {
            button.style.backgroundColor = 'buttonface';
        }
    });
})