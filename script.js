function getComputerChoice(){
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * options.length)];
}


computerchoice = getComputerChoice();
console.log(computerchoice);