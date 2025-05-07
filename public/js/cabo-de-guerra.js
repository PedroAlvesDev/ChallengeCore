const cable = document.getElementById("cable");
const statusText = document.getElementById("status");

let position = 0;
let gameOver = false;

const leftLimit = -100;
const rightLimit = 100;

function pull(button) {
  if (gameOver) return;

  position += 10;
  cable.style.left = position + "px";

  setTimeout(() => { positionZero() }, button);
  result()
};

function positionZero() {
  const interval = setInterval(() => {
    if (gameOver) {
      clearInterval(interval);
      return;
    };

    position -= 5;
    cable.style.left = position + "px";
    result()

    if (position <= leftLimit) {
      clearInterval(interval);
    };
  }, 900);
};

function result() {
  if (position >= rightLimit) {
    statusText.innerHTML = "Com cada puxão, escreveram sua glória. <br>A vitória é de vocês no cabo de guerra!"
    gameOver = true;
  } else if (position <= leftLimit) {
    statusText.innerHTML = "Foram fortes... mas não o bastante. <br>Hoje, vocês foram arrastados pela derrota."
    gameOver = true;
  };
};

function restart() {
  gameOver = false;
  statusText.innerText = "";
  position = 0;
  cable.style.left = position + "px";
};

document.querySelectorAll(".game-btn").forEach((btn) => {
  btn.addEventListener('click', () => {
    const game = btn.dataset.game;
    location.href = `${game}.html`;
  });
});
