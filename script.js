const getComputerChoice = () => {
  const getRandomNumber = Math.floor(Math.random() * 3);
  return getRandomNumber === 0
    ? "Rock"
    : getRandomNumber === 1
    ? "Paper"
    : "Scissors";
};

const getHumanChoice = () => prompt("Rock? Paper? Scissors?");

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
