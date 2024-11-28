const getComputerChoice = () => {
  const getRandomNumber = Math.floor(Math.random() * 3);
  return getRandomNumber === 0
    ? "Rock"
    : getRandomNumber === 1
    ? "Paper"
    : "Scissors";
};

const getHumanChoice = () => prompt("Rock? Paper? Scissors?");
