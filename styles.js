let playerSelection;
let computerSelection;
let score = "0";
let compScore = "0";
let gameOver = false;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const div = document.querySelector(".roundPlay");
const compRock = document.querySelector(".compRock");
const compPaper = document.querySelector(".compPaper");
const compScissor = document.querySelector(".compScissor");

//show score
const playerScore = document.querySelector(".score");
playerScore.textContent = `PLAYER:${score}`;
const compScoreDiv = document.querySelector(".compScore");
compScoreDiv.textContent = `COMPUTER:${compScore}`;

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
  playerScore.textContent = `PLAYER:${score}`;
  compScoreDiv.textContent = `COMPUTER:${compScore}`;
  if (score == 5) {
    gameOver = true;
    return (scoreDiv.innerHTML += ` <br>
    ** YOU WON THE GAME :D **
    `);
  } else if (compScore == 5) {
    playerScore.textContent = `PLAYER:${score}`;
    compScoreDiv.textContent = `COMPUTER:${compScore}`;
    gameOver = true;
    return (scoreDiv.innerHTML += ` <br>
    ** YOU LOST THE GAME :( **
      `);
  }
};

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  //remove active class from computer selection
  compRock.classList.remove("active");
  compPaper.classList.remove("active");
  compScissor.classList.remove("active");

  console.log(playerSelection);
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        compRock.classList.add("active");
        div.textContent = `You Tied! Player: ${playerSelection} vs CPU: ${computerSelection}`;
        return checkWinner();
      } else if (computerSelection == "paper") {
        compPaper.classList.add("active");
        div.textContent = `You Lost this round. Player: ${playerSelection} vs CPU ${computerSelection}`;
        compScore++;
        return checkWinner();
      } else {
        compScissor.classList.add("active");
        div.textContent = `You Won this round! Player: ${playerSelection} vs CPU ${computerSelection}`;
        score++;
        return checkWinner();
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        compRock.classList.add("active");
        div.textContent = `You Won this round! Player: ${playerSelection} vs CPU ${computerSelection}`;
        score++;
        return checkWinner();
      } else if (computerSelection == "paper") {
        compPaper.classList.add("active");
        div.textContent = `You Tied! Player: ${playerSelection} vs CPU: ${computerSelection}`;
        return checkWinner();
      } else {
        compScissor.classList.add("active");
        div.textContent = `You Lost this round. Player: ${playerSelection} vs CPU ${computerSelection}`;
        compScore++;
        return checkWinner();
      }
    } else {
      if (computerSelection == "rock") {
        compRock.classList.add("active");
        div.textContent = `You Lost this round. Player: ${playerSelection} vs CPU ${computerSelection}`;
        compScore++;
        return checkWinner();
      } else if (computerSelection == "paper") {
        compPaper.classList.add("active");
        div.textContent = `You Won this round! Player: ${playerSelection} vs CPU ${computerSelection}`;
        score++;
        return checkWinner();
      } else {
        compScissor.classList.add("active");
        div.textContent = `You Tied! Player: Player: ${playerSelection} vs CPU: ${computerSelection}`;
        return checkWinner();
      }
    }
  }
}
