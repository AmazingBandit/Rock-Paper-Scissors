// randomly return computers choices
function getComputerChoice() {
  const select = ["rock", "paper", "scissor"];
  compChoice = select[Math.floor(Math.random() * 3)];
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt(
    "Type your selection. (Rock, Paper, or Scissor"
  ).toLowerCase();
  console.log(playerSelection);

  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissor"
  ) {
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        return console.log(`You Tied! Rock vs. Rock | Score: ${score}`);
      } else if (computerSelection == "paper") {
        return console.log(`You Lose! Paper beats Rock | Score: ${score}`);
      } else {
        score++;
        return console.log(`You Win! Rock beats Scissor | Score: ${score}`);
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        return console.log(`You Win! Paper beats Rock | Score: ${score}`);
      } else if (computerSelection == "paper") {
        return console.log(`You Tied! Paper vs. Paper | Score: ${score}`);
      } else {
        return console.log(`You Lose! Scissor beats Paper | Score: ${score}`);
      }
    } else {
      if (computerSelection == "rock") {
        return console.log(`You Lose! Rock beats Scissor | Score: ${score}`);
      } else if (computerSelection == "paper") {
        return console.log(`You Win! Scissor beats Paper | Score: ${score}`);
      } else {
        return console.log(`You Tied! Scissor vs. Scissor | Score: ${score}`);
      }
    }
  } else {
    alert("please enter valid input");
  }
}

function game() {
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  if(score >= 3) {
    console.log(`You WIN! You won ${score}/5 games! Congratulations`)
  }
  else {
    console.log(`You LOSE! You only won ${score}/5 games. Better luck next time.`)
  }
}

let playerSelection;
let computerSelection;
let score = "0";
game();

//     store random choice
//     get user choice
//     changes user choice to all lowercase

// Compares choices to determine winner
//     returns win/lose statement
