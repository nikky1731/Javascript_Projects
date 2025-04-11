
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    if(playerChoice == computerChoice){
        result = "It's a tie";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice == "scissors") ? "You win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice == "rock") ? "You win!" : "You Lose!";
                break;
            case "scissor":
                result = (computerChoice == "paper") ? "You win!" : "You Lose!";
                break;
        }
    }

    resultDisplay.classList.remove("greenText", "redText")

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerChoice.textContent = `computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            break;
    }

}