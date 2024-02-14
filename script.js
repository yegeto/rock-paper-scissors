const userResponse = document.querySelector('#userResponse');
const results = document.querySelector('#results');
const roundResponse = document.createElement('p');
roundResponse.setAttribute('id', 'roundResponse')
const playerScoreText = document.createElement('p');
playerScoreText.setAttribute('id', 'playerScoreText');
const computerScoreText = document.createElement('p');
computerScoreText.setAttribute('id', 'computerScoreText');
const endGame = document.querySelector('#endGame');
results.appendChild(playerScoreText);
results.appendChild(computerScoreText);
results.appendChild(roundResponse);

let playerScore = 0;
let computerScore = 0;

userResponse.addEventListener('click', (event) => {
  const response = event.target;
  const computerChoice = getComputerChoice();
  const playerSelection = response.id;
  const roundResult = playRound(playerSelection, computerChoice);

  if (roundResult > 0) {
    playerScore += 1;
  } else if (roundResult < 0) {
    computerScore += 1;
  }

  playerScoreText.textContent = `Player: ${playerScore}`;
  computerScoreText.textContent = `Computer ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    userResponse.removeChild(rock);
    userResponse.removeChild(paper);
    userResponse.removeChild(scissors);

    playerScoreText.textContent = '';
    computerScoreText.textContent = '';
    roundResponse.textContent = '';

    const endGameText = document.createElement('h2');
    endGame.appendChild(endGameText);
    if (playerScore === 5) {
      endGameText.textContent = 'Congratulations! You win the game!';
    } else {
      endGameText.textContent = 'Game over. You lose!';
    }

    const restartBtn = document.createElement('button');
    endGame.appendChild(restartBtn);
    restartBtn.textContent = 'Play Again';
    restartBtn.addEventListener('click', () => {
      restartBtn.remove();
      endGameText.remove();
      playerScore = 0;
      computerScore = 0;
      const rockBtn = document.createElement('button');
      rockBtn.setAttribute('id', 'rock');
      rockBtn.textContent = 'Rock';
      userResponse.appendChild(rockBtn);
      const paperBtn = document.createElement('button');
      paperBtn.setAttribute('id', 'paper');
      paperBtn.textContent = 'Paper';
      userResponse.appendChild(paperBtn);
      const scissorsBtn = document.createElement('button');
      scissorsBtn.setAttribute('id', 'scissors');
      scissorsBtn.textContent = 'Scissors';
      userResponse.appendChild(scissorsBtn);

    })
  }
});



function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "rock"
      return computerChoice
    case 1:
      computerChoice = "paper"
      return computerChoice
    default:
      computerChoice = "scissors"
      return computerChoice
  }
}


function playRound(playerSelection, computerSelection) {
  let winner;


  if (playerSelection === computerSelection) {
    winner = "";
    roundResponse.textContent = "It's a tie.";
    return 0;
  } else if (playerSelection === "rock" || computerSelection === "rock") {
    if (playerSelection === "paper" || computerSelection === "paper") {
      winner = "paper"
    } else {
      winner = "rock"
    }
  } else if (playerSelection === "paper" || computerSelection === "paper") {
    if (playerSelection === "scissors" || computerSelection === "scissors") {
      winner = "scissors"
    }
  }

  if (winner === playerSelection) {
    roundResponse.textContent = `You win this round! ${capitalize(winner)} beats ${capitalize(computerSelection)}`;
    return 1;
  } else {
    roundResponse.textContent = `You lose this round! ${capitalize(winner)} beats ${capitalize(playerSelection)}`;
    return -1;
  }
}

function capitalize(string) {
  const firstLetter = string.at(0);
  const capitalizedLetter = firstLetter.toUpperCase();
  return string.replace(firstLetter, capitalizedLetter)
}