function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") return true;
  if (player === "Scissors" && computer === "Paper") return true;
  if (player === "Paper" && computer === "Rock") return true;
  return false;
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  }
  if (!hasPlayerWonTheRound(userOption, computerResult)) {
    computerScore += 1;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }

  return `It's a tie! Both chose ${userOption}`;
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (computerScore === 3 || playerScore === 3) {
    winnerMsgElement.innerText = playerScore === 3 ? "Player has won the game!" : "Computer has won the game!";
    resetGameBtn.style.display = 'block';
    optionsContainer.style.display = 'none';
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = '';
  roundResultsMsg.innerText = '';
};

showResults("Rock");