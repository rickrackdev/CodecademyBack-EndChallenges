/* Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Cheat code: Bomb, user wins the game!. 

Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else if (userInput === "scissors") {
    return userInput;
  } else if (userInput === "bomb") {
    return userInput;
  } else {
    return "Input a valid option, Rock, Paper or Scissors";
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tied";
  } else if (userChoice === "bomb") {
    return "Cheat activated, you won!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The Computer won!";
    } else {
      return "You won!";
    }
  }
};

function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(
    `User's choice is ${userChoice} and the Computer's choice is ${computerChoice}`
  );
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
