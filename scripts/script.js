const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#resetButton");
const winningScoreSelect = document.querySelector("#pointLimit");

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponents) {
  if (isGameOver == false) {
    player.score += 1;
    player.display.textContent = player.score;

    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      player.button.disabled = true;

      for (op of opponents) {
        op.display.classList.add("has-text-danger");
        op.button.disabled = true;
      }
    }
  }
}

/* function updateScores(player, opponent) {
  if (isGameOver == false) {
    player.score += 1;
    player.display.textContent = player.score;

    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");

      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
} */

p1.button.addEventListener("click", function () {
  updateScores(p1, [p2]);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, [p1]);
});

let reseteo = () => {
  isGameOver = false;

  for (player of [p1, p2]) {
    player.score = 0;
    player.display.textContent = player.score;
    player.display.classList.remove("has-text-success", "has-text-danger");
    player.button.disabled = false;
  }
};

resetButton.addEventListener("click", reseteo);

winningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(e.target.value);
  /*  winningScore = parseInt(this.value); */
  reseteo();
});
