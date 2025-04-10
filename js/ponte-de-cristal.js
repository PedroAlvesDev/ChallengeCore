function jogar() {
    let ganhou = 0;

    for (let rodada = 1; rodada <= 3; rodada++) {
        let escolhaJogador = prompt(`Nível ${rodada}, vidro (1, 2 ou 3)?`);
        let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador == pisoQuebrado) {
            alert(`O vidro quebrou ! Acabou pra você`);
            ganhou = 1;
            break;
        } else {
            alert(`Você passou ! O piso quebrado estava na ponte ${pisoQuebrado}`);
        };
    };

    if (ganhou == 0) {
        alert(`Parabéns! Você ganhou!!!`);
    };
};