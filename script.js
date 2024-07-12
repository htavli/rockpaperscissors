let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.random() * 3;
  console.log(choice);
  let choice_index = Math.floor(choice);
  return choice_index;
}

function getHumanChoice() {
  let choice = "";
  while (true) {
    choice = prompt("Which one will you play : rock, paper, or scissors?");
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
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

switch (humanChoice - computerChoice) {
  case 0:
    alert("It's a draw!");
    break;
  case 1:
  case -2:
    endGame("you", "the computer");
    break;
  case -1:
  case 2:
    endGame("the computer", "you");
    break;
}

function endGame(winner, loser) {
  console.log(winner + " beat " + loser + " !");
}

console.log(
  "Your choice: " +
    options[humanChoice] +
    "\nComputer's choice: " +
    options[computerChoice]
);

function Main() {
  console.log("Welcome to the game!");
}
