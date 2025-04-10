function jogar() {
    let personagem = ["", "", ""];

    let viloes = ["", "", ""];

    let forcaPersonagem = 0;
    let forcaViloes = 0;

    for (let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt(`Digite o nome do seu personagem ${i + 1}`);
        personagem[i] = escolhaPersonagem;
        forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
    };

    for (let i = 0; i < 3; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 10);
        let viloesPossiveis = ["Thanos", "Lex Luthor", "Voldemort", "Bellatrix Lestrange", "Harley Quinn", "Cruella De Vil", "Duende Verde", "Big Mom", "Malévola", "Scar"];
        viloes[i] = viloesPossiveis[indiceAleatorio];
        forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1;

    };

    if (forcaPersonagem > forcaViloes) {
        alert(`Seu time é muito forte! Você ganhou a disputa de força ! Sua força forca ${forcaPersonagem}`);
    } else if (forcaViloes > forcaPersonagem) {
        alert(`Seu time não foi forte o suficiente. O time dos vilões ganharam a disputa com força de ${forcaViloes}`);
    } else {
        alert(`Os dois times possuem o mesmo nivel de força! Vocês empataram !!!`);
    };
    ;
};

