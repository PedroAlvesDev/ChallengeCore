function jogar() {
    alert(`Vamos jogar jokenpo!`);

    let escolhaJogador = prompt('Faça sua escolha: \nPedra [1] Papel [2], Tesoura [3]');

    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador) {
        alert('Empate!!!');
    };

    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            alert('Computador venceu, escolheu Papel!');
        };
        if (escolhaComputador == 3) {
            alert('Jogador venceu, computador jogou tesoura!');
        };
    };

    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
            alert('Jogador venceu, computador jogou pedra!');
        };
        if (escolhaComputador == 3) {
            alert('Computador venceu, escolheu tesoura!');
        };
    };

    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert('Computador venceu, escolheu pedra!');
        };
        if (escolhaComputador == 2) {
            alert('Jogador venceu, computador jogou papel!');
        };
    };

    // Pedra [1] Papel [2], Tesoura [3]'
};