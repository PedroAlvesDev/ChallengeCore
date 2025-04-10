function jogar() {
    // PARTE 1: Lista de perguntas e respostas
    let perguntas = [
        {
            pergunta: "Qual é o principal pokémon do Ash ?",
            respostas: [
                { opcao: "Pikachu", correto: true },
                { opcao: "Bubasauro", correto: false },
                { opcao: "Charmander", correto: false }
            ]
        },
        {
            pergunta: "Qual é o tipo do pokémon Charmander ?",
            respostas: [
                { opcao: "Fogo", correto: true },
                { opcao: "Água", correto: false },
                { opcao: "Grama", correto: false }
            ]
        },
        {
            pergunta: "Qual é a evolução final do Bulbasaur?",
            respostas: [
                { opcao: "Ivysaur", correto: false },
                { opcao: "Venusaur", correto: true },
                { opcao: "Blastoise", correto: false }
            ]
        },
        {
            pergunta: "Qual desses pokémons é do tipo elétrico?",
            respostas: [
                { opcao: "Raichu", correto: true },
                { opcao: "Squirtle", correto: false },
                { opcao: "Onix", correto: false }
            ]
        },
        {
            pergunta: "Qual é o nome do time vilão na série original do Pokémon?",
            respostas: [
                { opcao: "Equipe Rocket", correto: true },
                { opcao: "Equipe Magma", correto: false },
                { opcao: "Equipe Aqua", correto: false }
            ]
        }
    ];

    // PARTE 2: Pegando os elementos do HTML
    const perguntaElemento = document.querySelector(".pergunta");
    const respostasElemento = document.querySelector(".respostas");
    const progressoElemento = document.querySelector(".progresso");
    const textoFinal = document.querySelector(".fim span");
    const conteudo = document.querySelector(".conteudo");
    const conteudoFinal = document.querySelector(".fim");

    // PARTE 3: Variáveis para controle do jogo
    let indiceAtual = 0;
    let acertos = 0;

    // PARTE 4: Função para carregar uma nova pergunta
    function carregarPergunta() {
        progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;

        const perguntaAtual = perguntas[indiceAtual];
        perguntaElemento.innerHTML = perguntaAtual.pergunta;

        respostasElemento.innerHTML = "";

        // Percorre todas as respostas da pergunta atual
        for (let i = 0; i < perguntaAtual.respostas.length; i++) {
            const resposta = perguntaAtual.respostas[i];
            const botao = document.createElement("button");
            botao.classList.add("botao-resposta");
            botao.innerText = resposta.opcao;
            botao.onclick = function () {
                // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
                if (resposta.correto) {
                    acertos++;
                };
                indiceAtual++;

                if (indiceAtual < perguntas.length) {
                    carregarPergunta();
                } else {
                    finalizarJogo();
                };
            };
            // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
            respostasElemento.appendChild(botao);
        };
    };

    // PARTE 5: Função para mostrar a tela final
    function finalizarJogo() {
        textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
        conteudo.style.display = "none";
        conteudoFinal.style.display = "flex";
    };

    // PARTE 6: Iniciando o jogo pela primeira vez
    carregarPergunta();
};