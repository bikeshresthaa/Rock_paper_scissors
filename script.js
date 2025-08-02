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
    
        let computerChoice = getComputerChoice();
        let target = e.target;
    
        switch(target.id){
            case 'rock':
                
                if(computerChoice === "paper"){
                    computerScore += 1;
                }
                else if(computerChoice === "scissors"){
                    humanScore += 1;
                }else{
                    draw += 1;
                }
                break;
    
            case 'paper':
                
                if(computerChoice === "scissors"){
                    computerScore += 1;
                }
                else if(computerChoice === "rock"){
                    humanScore += 1;
                }else{
                    draw += 1;
                }
                break;
    
            case 'scissors':
                
                if(computerChoice === "rock"){
                    computerScore += 1;
                }
                else if(computerChoice === "paper"){
                    humanScore += 1;
                }else{
                    draw += 1;
                }
                break;
        }

        results.innerHTML = `Your Score: ${humanScore}<br>
                                        Computer Score: ${computerScore} <br>
                                        Draw: ${draw}<br>`;

        if(humanScore === 5 || computerScore ===5){
            if(humanScore > computerScore){
                results.innerHTML += `YOU WIN!!!!`;
            }else{
                results.innerHTML += `COMPUTER WINSS!!!!`;                         
            }

            humanScore = 0;
            computerScore = 0;
            draw = 0;

            setTimeout(() => {
                results.innerHTML = '';
            }, 1000);
        }




    
})







