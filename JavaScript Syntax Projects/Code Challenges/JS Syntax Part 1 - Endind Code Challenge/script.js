let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9 + 1);

const getAbsoluteDistance = (target, guess) => {
  return Math.abs(target - guess);
};
const compareGuesses = (human, pc, target) => {
  let absHuman = getAbsoluteDistance(target, human);
  let absPc = getAbsoluteDistance(target, pc);

  if (absHuman < absPc) {
    return true;
  } else if (absHuman > absPc) {
    return false;
  } else if (absHuman === absPc) {
    return true;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else if (winner === "computer") {
    return (computerScore += 1);
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};

const maxGuess = (human) => {
  if (human > 9) {
    return alert("Number out of range, valid range is 0-9.");
  }
};
