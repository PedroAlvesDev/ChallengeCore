// let square = document.getElementById("square");
// let position = 150;

// function moveRight(button) {
//     position += 5;
//     square.style.left = position + "px";

//     setTimeout(positionZero, button)
// };

// function positionZero() {
//     const interval = setInterval(() => {
//         if (position <= 0) {
//             clearInterval(interval);
//         } else {
//             position -= 1;
//             square.style.left = position + "px";
//         };
//     }, 900);
// };


const square = document.getElementById("square");
const statusText = document.getElementById("status");

let position = 150; // posição inicial (ajustada para ficar dentro da .container)
let voltando = false;
let gameOver = false;
let recuoAnimacao = null;

const LIMITE_DIREITA = 250; // vitória
const LIMITE_ESQUERDA = 50;  // derrota
const POSICAO_INICIAL = 150;

square.style.left = position + "px";

function puxar() {
  if (voltando || gameOver) return;

  position += 20;
  square.style.left = position + "px";
  checarResultado();

  if (recuoAnimacao) cancelAnimationFrame(recuoAnimacao);
  setTimeout(voltarAoCentro, 800);
}

function voltarAoCentro() {
  voltando = true;

  function animarRecuo() {
    if (position > POSICAO_INICIAL && !gameOver) {
      position -= 5;
      square.style.left = position + "px";
      checarResultado();
      recuoAnimacao = requestAnimationFrame(animarRecuo);
    } else {
      voltando = false;
      cancelAnimationFrame(recuoAnimacao);
    }
  }

  animarRecuo();
}

function checarResultado() {
  if (position >= LIMITE_DIREITA) {
    statusText.textContent = "🏆 Você venceu!";
    gameOver = true;
  } else if (position <= LIMITE_ESQUERDA) {
    statusText.textContent = "💀 Você perdeu!";
    gameOver = true;
  }
}
