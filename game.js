let playerPoints = 0;
let computerPoints = 0;

const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

buttons[1].addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

buttons[2].addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
    let min = 1;
    let max = 3;
    let computer;
    

    let random = Math.floor(Math.random() * (max - min + 1) + min);
    
    if (random === 1) {
        computer = "rock";
    } else if (random === 2) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    return computer;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("tie");
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You won! Rock beats Scissors");
            playerPoints++;
        } else if (computerSelection === "paper") {
            console.log("You lose! Paper beats rock");
            computerPoints++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You won! Paper beats rock");
            playerPoints++;
        } else if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats paper");
            computerPoints++
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors");
            computerPoints++;
        } else if (computerSelection === "paper") {
            console.log("You won! Scissors beats paper");
            playerPoints++;
        }
    }
}


