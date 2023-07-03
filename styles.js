// randomly return computers choices
function getComputerChoice() {
  const select = ["rock", "paper", "scissor"];
  compChoice = select[Math.floor(Math.random() * 3)];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection == "rock" ??
    playerSelection == "paper" ??
    playerSelection == "scissor"
  ) {
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        console.log("You Tied! Rock vs. Rock");
      } else if (computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
      } else {
        console.log("You Win! Rock beats Scissor");
      }
    }
  }
  else {
    alert('please enter valid input');
  }
}

const playerSelection = prompt("Type your selection. (Rock, Paper, or Scissor");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//     store random choice
//     get user choice
//     changes user choice to all lowercase

// Compares choices to determine winner
//     returns win/lose statement
