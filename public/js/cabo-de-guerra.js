const cable = document.getElementById("cable");
const statusText = document.getElementById("status");

let position = 0;
let gameOver = false;

const startingPosition = 0;
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
    statusText.textContent = "🏆 Você Venceu !!!"
    gameOver = true;
  } else if (position <= leftLimit) {
    statusText.textContent = "💀 Você Perdeu !!!"
    gameOver = true;
    restart();
  };
};

document.querySelectorAll(".game-btn").forEach((btn) => {
  btn.addEventListener('click', () => {
    const game = btn.dataset.game;
    location.href = `${game}.html`;
  });
});
