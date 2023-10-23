const txtComputerScore = document.getElementsByClassName("computerScore")[0];
const txtUserScore = document.getElementsByClassName("userScore")[0];
const computerImage = document.querySelector(".computer img");
const txtResult = document.getElementById("result");
const userImage = document.querySelectorAll(".user button");

let userChoice = "";
let computerChoice = "";
let result = "";
let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  computerChoice = choices[index];
}

function getResult(user, computer) {
  if (user === "rock") {
    if (computer === "rock") result = "DRAW";
    else if (computer === "paper") result = "LOSE";
    else if (computer === "scissors") result = "WIN";
  } else if (user === "paper") {
    if (computer === "rock") result = "WIN";
    else if (computer === "paper") result = "DRAW";
    else if (computer === "scissors") result = "LOSE";
  } else if (user === "scissors") {
    if (computer === "rock") result = "LOSE";
    else if (computer === "paper") result = "WIN";
    else if (computer === "scissors") result = "DRAW";
  }
}

function updateScores() {
  txtUserScore.textContent = `USER = ${userScore}`;
  txtComputerScore.textContent = `COMPUTER = ${computerScore}`;
}

function getScore(result) {
  if (result === "WIN") {
    userScore++;
  } else if (result === "LOSE") {
    computerScore++;
  }
  updateScores();
}

function setImage() {
  if (computerChoice === "rock") computerImage.src = "img/rock.png";
  else if (computerChoice === "paper") computerImage.src = "img/paper.png";
  else if (computerChoice === "scissors")
    computerImage.src = "img/scissors.png";
}

function setText() {
  if (result === "WIN") txtResult.innerHTML = "WIN";
  if (result === "DRAW") txtResult.innerHTML = "DRAW";
  if (result === "LOSE") txtResult.innerHTML = "LOSE";
}

for (let i = 0; i < userImage.length; i++) {
  userImage[i].addEventListener("click", function () {
    userChoice = userImage[i].id;
    console.log(userChoice);

    getComputerChoice();
    console.log(computerChoice);

    getResult(userChoice, computerChoice);
    console.log(result);

    setImage();
    setText();
    getScore(result);
  });
}

// userImage[0].addEventListener("click", function () {
//   console.log("Halo");
// });
// userImage[1].addEventListener("click", function () {
//   console.log("Halo");
// });
// userImage[2].addEventListener("click", function () {
//   console.log("Halo");
// });
