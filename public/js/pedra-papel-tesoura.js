let options = document.querySelector('#options');
let content = document.querySelector('.content');
let resultText = document.querySelector('#result');

let escolhaJogador = "";
let escolhaComputador = "";

let h2 = document.createElement('h2');
h2.innerText = 'Pra ganhar é preciso arriscar!'

let p = document.createElement('p');
p.innerText = 'Faça sua escolha!';

let buttonRock = document.createElement('button');
buttonRock.classList.add('choise');
buttonRock.id = "rock";

let rock = document.createElement('i');
rock.classList.add('fa-solid', 'fa-hand-back-fist');

let rockText = document.createElement('p');
rockText.innerText = 'Pedra';

let buttonPaper = document.createElement('button');
buttonPaper.classList.add('choise');
buttonPaper.id = "paper";

let paper = document.createElement('i');
paper.classList.add('fa-solid', 'fa-hand');

let paperText = document.createElement('p');
paperText.innerText = 'Papel';

let buttonScissors = document.createElement('button');
buttonScissors.classList.add('choise');
buttonScissors.id = "scissors";

let scissors = document.createElement('i');
scissors.classList.add('fa-solid', 'fa-hand-scissors');

let scissorsText = document.createElement('p');
scissorsText.innerText = 'Tesoura';

buttonRock.addEventListener('click', startMatch);
buttonPaper.addEventListener('click', startMatch);
buttonScissors.addEventListener('click', startMatch);

content.appendChild(h2);
content.appendChild(p);

buttonRock.appendChild(rock);
rock.appendChild(rockText);

buttonPaper.appendChild(paper);
paper.appendChild(paperText);

buttonScissors.appendChild(scissors);
scissors.appendChild(scissorsText);

options.appendChild(buttonRock);
options.appendChild(buttonPaper);
options.appendChild(buttonScissors);

function startMatch(event) {
    escolhaJogador = event.currentTarget.id;

    let escPosComputador = ["rock", "paper", "scissors"];
    escolhaComputador = escPosComputador[Math.floor(Math.random() * 3)];

    result();
};

function result() {
    if (escolhaJogador == escolhaComputador) {
        resultText.innerText = "Empate!!!";
    } else if (escolhaJogador == 'rock') {
        if (escolhaComputador == 'paper') {
            resultText.innerText = "Computador venceu, escolheu Papel!";
        } else if (escolhaComputador == 'scissors') {
            resultText.innerText = "Jogador venceu, computador jogou tesoura!";
        };
    } else if (escolhaJogador == 'paper') {
        if (escolhaComputador == 'rock') {
            resultText.innerText = "Jogador venceu, computador jogou pedra!";
        } else if (escolhaComputador == 'scissors') {
            resultText.innerText = "Computador venceu, escolheu tesoura!";
        };
    } else if (escolhaJogador == 'scissors') {
        if (escolhaComputador == 'rock') {
            resultText.innerText = "Computador venceu, escolheu pedra!";
        } else if (escolhaComputador == 'paper') {
            resultText.innerText = "Jogador venceu, computador jogou papel!";
        };
    };
};

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});

// Pedra [1] Papel [2], Tesoura [3]'
// rock [1] paper [2], scissors [3]'
