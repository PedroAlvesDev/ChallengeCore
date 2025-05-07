
const container = document.querySelector('#container');
const img = document.querySelector('#imgResult');
const result = document.querySelector('#result');
let player = document.querySelector('input#player');
let teamPlayer = document.querySelector('.teamPlayer');
let teamVilain = document.querySelector('.teamVilain');

let personagem = [];
let viloes = ["", "", ""];
let forcaPersonagem = 0;
let forcaViloes = 0;

function escolhaJogador() {
    let teamValue = player.value.trim();

    if (teamValue.length == 0) {
        alert(`Nenhum jogador válido!`);
    }

    if (personagem.length < 1) {
        let h2 = document.createElement('h2');
        h2.innerText = "Time Jogador";
        teamPlayer.appendChild(h2);
    };


    if (personagem.length < 3) {
        let labelPlayer = document.createElement('label');
        labelPlayer.classList.add('namePlayer');

        let parText = document.createElement('p');
        parText.innerText = teamValue;

        labelPlayer.appendChild(parText);
        teamPlayer.appendChild(labelPlayer);

        personagem.push(teamValue);
        strengthLevel(teamValue)

        player.value = '';
        player.focus();

        if (personagem.length === 3) {
            strengthLevelVillain();
            battleResult()
        };
    };
};

function strengthLevel(name) {
    const forca = Math.floor(Math.random() * 10) + 1;
    forcaPersonagem += forca;
};

function strengthLevelVillain() {
    forcaViloes = 0;
    let viloesPossiveis = ["Thanos", "Lex Luthor", "Voldemort", "Bellatrix Lestrange", "Harley Quinn", "Cruella De Vil", "Duende Verde", "Big Mom", "Malévola", "Scar"];

    let h2 = document.createElement('h2');
    h2.innerText = "Time Vilões";
    teamVilain.appendChild(h2);

    for (let i = 0; i < 3; i++) {
        let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
        viloes[i] = viloesPossiveis[indiceAleatorio];
        forcaViloes += Math.floor(Math.random() * 10) + 1;

        let labelVilain = document.createElement('label');
        labelVilain.classList.add('namePlayer');

        let parText = document.createElement('p');
        parText.innerText = viloes[i];

        labelVilain.appendChild(parText);
        teamVilain.appendChild(labelVilain);
    };
};

function battleResult() {
    if (forcaPersonagem > forcaViloes) {
        img.src = "assets/images/ChatGPT-Vitória.png";

        result.innerText = `A força brilhou intensamente em seu time!\n Vocês dominaram a disputa com poder absoluto: ${forcaPersonagem}!`;

    } else if (forcaViloes > forcaPersonagem) {
        img.src = "assets/images/ChatGPT-Derrota.png";

        result.innerText = `A sombra falou mais alto...\n Os vilões esmagaram a esperança com sua força avassaladora: ${forcaViloes}!`;

    } else {
        img.src = "assets/images/ChatGPT-hero-vs-vilain-empate.png";

        result.innerText = `Dois lados... um só poder.\n O equilíbrio da força se manteve. Nenhum vencedor hoje!`;
    };
};

function restart() {
    personagem = [];
    viloes = ["", "", ""];
    forcaPersonagem = 0;
    forcaViloes = 0;

    teamPlayer.innerText = "";
    teamVilain.innerText = "";

    result.innerText = "";
    img.src = "";
};

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
