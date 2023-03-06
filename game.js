
function getComputerChoice(){
    let min = 1;
    let max = 3;
    let computer;
    
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    if(random === 1){
        computer = "rock";
    }else if(random === 2){
        computer = "paper";
    }else{
        computer = "scissors";
    }
    return computer;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("tie");
    }
    if(playerSelection === "rock") {
        if(computerSelection === "scissors"){
            console.log("You won! Rock beats Scissors");
        }else if(computerSelection === "paper"){
            console.log("You lose! Paper beats rock");
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            console.log("You won! Paper beats rock");
        }else if(computerSelection === "scissors"){
            console.log("You lose! Scissors beats paper");
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("You lose! Rock beats Scissors");
        }else if(computerSelection === "paper"){
            console.log("You won! Scissors beats paper");
        }
    }
}
let playerSelection = prompt("Rock - Paper - Scissors");
let player1 = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

playRound(player1, computerSelection);