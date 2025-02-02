let options = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "rockButton":
        playGame(0);
        break;
      case "paperButton":
        playGame(1);
        break;
      case "scissorsButton":
        playGame(2);
        break;
    }
  });
});

/*function clear_input(input) {
  let res = "";
  for (let i = 0; i < input.length; i++) {
    res += input[i].toLowerCase();
  }
  return res;
}*/

function getComputerChoice() {
  let choice = Math.random() * 3;
  console.log(choice);
  let choice_index = Math.floor(choice);
  return choice_index;
}

/*function getHumanChoice() {
  let choice = "";
  while (true) {
    choice = clear_input(
      prompt("Which one will you play : rock, paper, or scissors?")
    );
    if (options.includes(choice)) {
      switch (choice) {
        case "rock":
          return 0;
        case "paper":
          return 1;
        case "scissors":
          return 2;
      }
      break;
    } else {
      alert("Please input your choice properly");
      continue;
    }
  }
}*/

function decideWinner(humanChoice, computerChoice) {
  switch (humanChoice - computerChoice) {
    case 0:
      return "draw";
    case 1:
    case -2:
      return "player";
    case -1:
    case 2:
      return "computer";
  }
}

function endGame(winner, loser) {
  console.log(winner + " beat " + loser + " !");
  if ((winner = "you")) {
    humanScore++;
  } else {
    computerScore++;
  }
}

function playGame(humanChoice) {
  let computerChoice;

  let winner;

  computerChoice = getComputerChoice();

  winner = decideWinner(humanChoice, computerChoice);

  switch (winner) {
    case "draw":
      addText(
        `It's a draw! Your choice: ${options[humanChoice]} Computer's choice: ${options[computerChoice]}`
      );
      break;
    case "player":
      humanScore++;
      addText(
        `${humanScore} - ${computerScore} Player wins! Your choice: ${options[humanChoice]} Computer's choice: ${options[computerChoice]}`
      );
      break;
    case "computer":
      computerScore++;
      addText(
        `${humanScore} - ${computerScore} The computer wins! Your choice: ${options[humanChoice]} Computer's choice: ${options[computerChoice]}`
      );
      break;
  }

  console.log(`The score is: Player ${humanScore} - ${computerScore} Computer`);
  if (humanScore > computerScore) {
    console.log("The player wins!");
  } else if (humanScore < computerScore) {
    console.log("The computer wins!");
  } else {
    console.log("It's a draw!");
  }
}

const textContainer = document.querySelector("#textContainer");

function addText(arr) {
  const text = document.createElement("p");
  text.textContent = arr;
  textContainer.appendChild(text);
}

function Main() {
  console.log("Welcome to the game!");
  playGame(5);
}

//Main();
