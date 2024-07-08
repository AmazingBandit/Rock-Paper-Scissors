let playerSelection;
let computerSelection;
let score = "0";
let compScore = "0";
let gameOver = false;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");
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
    return (result.textContent = `Player Wins!
    `);
  } else if (compScore == 5) {
    playerScore.textContent = `PLAYER:${score}`;
    compScoreDiv.textContent = `COMPUTER:${compScore}`;
    gameOver = true;
    return (result.textContent = `Computer Wins!
      `);
  }
};

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  compRock.classList.remove("active");
  compPaper.classList.remove("active");
  compScissor.classList.remove("active");

  compRock.classList.remove("active-winner");
  compPaper.classList.remove("active-winner");
  compScissor.classList.remove("active-winner");

  rock.classList.remove("active");
  paper.classList.remove("active");
  scissor.classList.remove("active");

  rock.classList.remove("active-winner");
  paper.classList.remove("active-winner");
  scissor.classList.remove("active-winner");

  console.log(playerSelection);
  if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
    if (playerSelection == "rock") {
      if (computerSelection == "rock") {
        compRock.classList.add("active");
        rock.classList.add("active");
        result.textContent = `Tied`;
        return checkWinner();
      } else if (computerSelection == "paper") {
        compPaper.classList.add("active-winner");
        rock.classList.add("active");
        result.textContent = `You Lost`;
        compScore++;
        return checkWinner();
      } else {
        compScissor.classList.add("active");
        rock.classList.add("active-winner");
        result.textContent = `You Won`;
        score++;
        return checkWinner();
      }
    } else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        compRock.classList.add("active");
        paper.classList.add("active-winner");
        result.textContent = `You Won`;
        score++;
        return checkWinner();
      } else if (computerSelection == "paper") {
        compPaper.classList.add("active");
        paper.classList.add("active");
        result.textContent = `Tied`;
        return checkWinner();
      } else {
        compScissor.classList.add("active-winner");
        paper.classList.add("active");
        result.textContent = `You Lost`;
        compScore++;
        return checkWinner();
      }
    } else {
      if (computerSelection == "rock") {
        compRock.classList.add("active-winner");
        scissor.classList.add("active");
        result.textContent = `You Lost`;
        compScore++;
        return checkWinner();
      } else if (computerSelection == "paper") {
        compPaper.classList.add("active");
        scissor.classList.add("active-winner");
        result.textContent = `You Won`;
        score++;
        return checkWinner();
      } else {
        compScissor.classList.add("active");
        scissor.classList.add("active");
        result.textContent = `Tied`;
        return checkWinner();
      }
    }
  }
}
