const square = document.getElementById("square");
const statusText = document.getElementById("status");

let position = 0;
let gameOver = false;

const startingPosition = 0;
const leftLimit = -100;
const rightLimit = 100;

function pull(button) {
  if (gameOver) return;

  position += 10;
  square.style.left = position + "px";

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
    square.style.left = position + "px";
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
  };
};
