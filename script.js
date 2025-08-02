// function for computer choice
function getComputerChoice(){
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * options.length)];
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;

const buttons = document.querySelector(".buttons");
let results = document.querySelector("#results");

buttons.addEventListener('click', (e) => {
    
    let target = e.target;

    switch(target.id){
        case 'rock':
            
            if(getComputerChoice() === "paper"){
                computerScore += 1;
            }
            else if(getComputerChoice() === "scissors"){
                humanScore += 1;
            }else{
                draw += 1;
            }

            results.textContent = `Your Score: ${humanScore}\n
                                    Computer Score: ${computerScore} \n
                                    Draw: ${draw}`;
            break;

        case 'paper':
            
            if(getComputerChoice() === "scissors"){
                computerScore += 1;
            }
            else if(getComputerChoice() === "rock"){
                humanScore += 1;
            }else{
                draw += 1;
            }

            results.textContent = `Your Score: ${humanScore}\n
                                    Computer Score: ${computerScore} \n
                                    Draw: ${draw}`;
            break;

            case 'scissors':
            
            if(getComputerChoice() === "rock"){
                computerScore += 1;
            }
            else if(getComputerChoice() === "paper"){
                humanScore += 1;
            }else{
                draw += 1;
            }

            results.textContent = `Your Score: ${humanScore}\n
                                    Computer Score: ${computerScore} \n
                                    Draw: ${draw}`;
            break;




    }
})







