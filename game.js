let playerPoints = 0;
let computerPoints = 0;
let results = [];

const buttons = document.querySelectorAll('button');
const showResults = document.querySelector('#result');
document.body.appendChild(showResults);

const paraElement = document.createElement('p');
paraElement.style.display = 'inline';
showResults.appendChild(paraElement);

buttons[0].addEventListener('click', () => {
    playRound("rock", getComputerChoice());
    pushResult();
  });

buttons[1].addEventListener('click', () => {
    playRound("paper", getComputerChoice());
    pushResult();
});

buttons[2].addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
    pushResult();
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
     results.push("tie");
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
         results.push("You won! Rock beats Scissors");
            playerPoints++;
        } else if (computerSelection === "paper") {
         results.push("You lose! Paper beats rock");
            computerPoints++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
         results.push("You won! Paper beats rock");
            playerPoints++;
        } else if (computerSelection === "scissors") {
         results.push("You lose! Scissors beats paper");
            computerPoints++
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
         results.push("You lose! Rock beats Scissors");
            computerPoints++;
        } else if (computerSelection === "paper") {
         results.push("You won! Scissors beats paper");
            playerPoints++;
        }
    }
}

function pushResult(){
    let lastIndex = results.length - 1;
    paraElement.textContent = results[lastIndex];
    showResults.appendChild(paraElement);

}


