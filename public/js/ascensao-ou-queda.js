
const container = document.querySelector('#container');
let player = document.querySelector('input#player');
let team = document.querySelector('.team');

let personagem = ["", "", ""];

let viloes = ["", "", ""];

let forcaPersonagem = 0;
let forcaViloes = 0;

function escolhaJogador() {
    let teamValue = player.value.trim();

    if (teamValue.length == 0) {
        alert(`Nenhum jogador válido!`);
    }

    let labelPlayer = document.createElement('label');
    labelPlayer.classList.add('namePlayer');

    let parText = document.createElement('p');
    parText.innerText = teamValue;

    labelPlayer.appendChild(parText);
    team.appendChild(labelPlayer);

    personagem.push(teamValue);
    strengthLevel(teamValue)

    player.value = '';
    player.focus();

};

function strengthLevel(name) {
    const forca = Math.floor(Math.random() * 10) + 1;
    forcaPersonagem += forca;


    console.log(`Personagem: ${name} | Força gerada: ${forca}`);
    console.log(`Força total da equipe: ${forcaPersonagem}`);
    console.log(`Personagens: ${personagem}` );
};


// function strengthLevel2(escolhaJogador) {
//     for (let i = 0; i < 3; i++) {
//         // let escolhaPersonagem = prompt(`Digite o nome do seu personagem ${i + 1}`);
//         let escolhaPersonagem = `teamValue ${i + 1}`;
//         personagem[i] = escolhaPersonagem;
//         forcaPersonagem = forcaPersonagem + 3;
//         // Math.floor(Math.random() * 10) + 1;
//         console.log('força1', escolhaPersonagem, forcaPersonagem);
//     };
// };

function strengthLevelVillain() {
    for (let i = 0; i < 3; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 10);
        let viloesPossiveis = ["Thanos", "Lex Luthor", "Voldemort", "Bellatrix Lestrange", "Harley Quinn", "Cruella De Vil", "Duende Verde", "Big Mom", "Malévola", "Scar"];
        viloes[i] = viloesPossiveis[indiceAleatorio];
        forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;
    };
};

function result() {
    if (forcaPersonagem > forcaViloes) {
        alert(`Seu time é muito forte! Você ganhou a disputa de força ! Sua força forca ${forcaPersonagem}`);
    } else if (forcaViloes > forcaPersonagem) {
        alert(`Seu time não foi forte o suficiente. O time dos vilões ganharam a disputa com força de ${forcaViloes}`);
    } else {
        alert(`Os dois times possuem o mesmo nivel de força! Vocês empataram !!!`);
    };
};


document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
