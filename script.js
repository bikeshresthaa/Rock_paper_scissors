// function for computer choice
function getComputerChoice(){
    const options = ["rock", "scissors", "paper"];
    return options[Math.floor(Math.random() * options.length)];
}




//function to get human input
function getHumanChoice(){
    let input = prompt("Enter your choice: ", "");
    let normalizedInput = input.toLowerCase();
    console.log(`you selected ${normalizedInput}`);

}

getHumanChoice();