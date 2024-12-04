const getComputerChoice = () => {
  const getRandomNumber = Math.floor(Math.random() * 3);
  return getRandomNumber === 0
    ? "Rock"
    : getRandomNumber === 1
    ? "Paper"
    : "Scissors";
};

const getHumanChoice = () => prompt("Rock? Paper? Scissors?");

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoice === computerChoice) {
      return "It's draw";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      humanScore++;
      return "You win! Rock beats Scissors.";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      humanScore++;
      return "You win! Paper beats Rock.";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      return "You win! Scissors beats Paper.";
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  };

  const gameScreen = document.querySelector("body");
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorsButton = document.createElement("button");

  rockButton.textContent = "Rock";
  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";

  gameScreen.appendChild(rockButton);
  gameScreen.appendChild(paperButton);
  gameScreen.appendChild(scissorsButton);

  const resultScreen = document.createElement("div");
  const roundResult = document.createElement("p");
  const score = document.createElement("p");

  gameScreen.appendChild(resultScreen);
  resultScreen.appendChild(roundResult);
  resultScreen.appendChild(score);

  score.textContent = `Your Score:${humanScore} Computer Score:${computerScore}`;

  rockButton.addEventListener("click", () => {
    roundResult.textContent = playRound("Rock", getComputerChoice());
    score.textContent = `Your Score:${humanScore} Computer Score:${computerScore}`;
    checkEndGame(humanScore, computerScore);
  });
  paperButton.addEventListener("click", () => {
    roundResult.textContent = playRound("Paper", getComputerChoice());
    score.textContent = `Your Score:${humanScore} Computer Score:${computerScore}`;
    checkEndGame(humanScore, computerScore);
  });
  scissorsButton.addEventListener("click", () => {
    roundResult.textContent = playRound("Scissors", getComputerChoice());
    score.textContent = `Your Score:${humanScore} Computer Score:${computerScore}`;
    checkEndGame(humanScore, computerScore);
  });

  const checkEndGame = (humanScore, computerScore) => {
    const gameResult = document.createElement("h2");
    if (humanScore > 5) {
      gameResult.textContent = "You win the game!";
    } else if (computerScore > 5) {
      gameResult.textContent = "You lose the game!";
    }
    resultScreen.appendChild(gameResult);
  };
};

playGame();
