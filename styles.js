let playerSelection;
let computerSelection;
let score = "0";
let compScore = "0";
let gameOver = false;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const div = document.querySelector("div");

rock.addEventListener("click", () => {
  if (gameOver === false) {
    if (score <= 5 || compScore <= 5) {
      playRound("rock");
    }
  }
});
paper.addEventListener("click", () => {
  if (gameOver === false) {
    if (score <= 5 || compScore <= 5) {
      playRound("paper");
    }
  }
});
scissor.addEventListener("click", () => {
  if (gameOver === false) {
    if (score <= 5 || compScore <= 5) {
      playRound("scissor");
    }
  }
});

// randomly return computers choices
function getComputerChoice() {
  const select = ["rock", "paper", "scissor"];
  compChoice = select[Math.floor(Math.random() * 3)];
  return compChoice;
}

const checkWinner = () => {
  div.textContent += ` | Player: ${score} vs CPU: ${compScore}`;
  if (score == 5) {
    gameOver = true;
    return (div.innerHTML += ` <br>
    ** YOU WON THE GAME :D **
    `);
  } else if (compScore == 5) {
    gameOver = true;
    return (div.innerHTML += ` <br>
    ** YOU LOST THE GAME :( **
      `);
  }
};

function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissor"
  ) {
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        div.textContent = `You Tied! Player: ${playerSelection} vs CPU: ${computerSelection}`;
        return checkWinner();
      } else if (computerSelection == "paper") {
        div.textContent = `You Lost this round. Player: ${playerSelection} vs CPU ${computerSelection}`;
        compScore++;
        return checkWinner();
      } else {
        div.textContent = `You Won this round! Player: ${playerSelection} vs CPU ${computerSelection}`;
        score++;
        return checkWinner();
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        div.textContent = `You Won this round! Player: ${playerSelection} vs CPU ${computerSelection}`;
        score++;
        return checkWinner();
      } else if (computerSelection == "paper") {
        div.textContent = `You Tied! Player: ${playerSelection} vs CPU: ${computerSelection}`;
        return checkWinner();
      } else {
        div.textContent = `You Lost this round. Player: ${playerSelection} vs CPU ${computerSelection}`;
        compScore++;
        return checkWinner();
      }
    } else {
      if (computerSelection == "rock") {
        div.textContent = `You Lost this round. Player: ${playerSelection} vs CPU ${computerSelection}`;
        compScore++;
        return checkWinner();
      } else if (computerSelection == "paper") {
        div.textContent = `You Won this round! Player: ${playerSelection} vs CPU ${computerSelection}`;
        score++;
        return checkWinner();
      } else {
        div.textContent = `You Tied! Player: Player: ${playerSelection} vs CPU: ${computerSelection}`;
        return checkWinner();
      }
    }
  }
}
