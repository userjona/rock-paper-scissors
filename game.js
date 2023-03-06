
function getComputerChoice(){
    let min = 1;
    let max = 3;
    
    let random = Math.floor(Math.random() * (max - min + 1) + min);

    if(random === 1){
        console.log("Rock");
    }else if(random === 2){
        console.log("Paper");
    }else{
        console.log("Scissors");
    }
}

getComputerChoice();