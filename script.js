// function for computer choice
function getComputerChoice(){
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * options.length)];
}




//function to get human input
function getHumanChoice(){
    let input = prompt("Enter your choice: ", "");
    let normalizedInput = input.toLowerCase();
    return normalizedInput;

}

//function to play a Round
function playRound(){
    let validRound = true;
    let humanChoice = getHumanChoice();
    let computerChoice =  getComputerChoice();

    if(humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("You lose! \n Computer wins!!")
        computerScore+= 1;
        
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("You win! \n Computer lose!!")
        humanScore+= 1;
    }else if(humanChoice === "rock" && computerChoice === "rock"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("Its a Draw!!")
        
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("You win! \n Computer lose!!")
        humanScore+= 1;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("You lose! \n Computer wins!!")
        computerScore+= 1;
    }else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("Its a Draw!!")
        
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("You lose! \n Computer wins!!")
        computerScore += 1;
        
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("You win! \n Computer lose!!")
        humanScore+= 1;
        
    }else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
        console.log("Its a Draw!!")
        
    }else{
        console.log("PLEASE ENTER VALID INPUT!!!\nCHOICES:- 'ROCK', 'SCISSORS', 'PAPER'.")
        validRound = false;
    }
    
    if(!validRound){
        playRound();
    }

}
//function to play a whole game(5 rounds)
function playGame(){
    for(let i = 0; i< 5; i++){
        if(i===0){console.log("Starting Game...");}
        console.log(`ROUND ${i+1}:`);
        playRound();
        console.log(`Score of Round ${i+1}: \nYour Score: ${humanScore}\nComputer Score: ${computerScore}..`)
    }

    if(humanScore<computerScore){
        console.log("COMPUTER WINS!!!!!!!")
    }else{
        console.log("Congratulations!!\nYou Beat the Computer!");
    }

    console.log(`Final Score: \nYour Score: ${humanScore}\nComputer Score: ${computerScore}`)
}

let humanScore = 0;
let computerScore = 0;
playGame();


