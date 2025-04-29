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

    let perguntasAnimes = [
        {
            pergunta: "Qual é a Raposa de Nove Caudas selada em Naruto?",
            respostas: [
                { opcao: "Kurama", correto: true },
                { opcao: "Shukaku", correto: false },
                { opcao: "Matatabi", correto: false }
            ]
        },
        {
            pergunta: "Qual o nome da espada de Ichigo em Bleach?",
            respostas: [
                { opcao: "Zangetsu", correto: true },
                { opcao: "Bankai", correto: false },
                { opcao: "Getsuga", correto: false }
            ]
        },
        {
            pergunta: "Qual é o principal Pokémon do Ash?",
            respostas: [
                { opcao: "Pikachu", correto: true },
                { opcao: "Bubasauro", correto: false },
                { opcao: "Charmander", correto: false }
            ]
        },
        {
            pergunta: "Quem é o capitão do Chapéu de Palha em One Piece?",
            respostas: [
                { opcao: "Monkey D. Luffy", correto: true },
                { opcao: "Zoro", correto: false },
                { opcao: "Shanks", correto: false }
            ]
        },
        {
            pergunta: "Quem é o rival de Sasuke em Naruto?",
            respostas: [
                { opcao: "Naruto Uzumaki", correto: true },
                { opcao: "Gaara", correto: false },
                { opcao: "Neji", correto: false }
            ]
        },
        {
            pergunta: "Qual o nome do primeiro vilão enfrentado por Ichigo em Bleach?",
            respostas: [
                { opcao: "Fishbone D", correto: true },
                { opcao: "Aizen", correto: false },
                { opcao: "Ulquiorra", correto: false }
            ]
        },
        {
            pergunta: "Quem é o criador da Equipe Rocket?",
            respostas: [
                { opcao: "Giovanni", correto: true },
                { opcao: "James", correto: false },
                { opcao: "Ash", correto: false }
            ]
        },
        {
            pergunta: "Qual é o objetivo de Luffy em One Piece?",
            respostas: [
                { opcao: "Encontrar o One Piece e se tornar o Rei dos Piratas", correto: true },
                { opcao: "Derrotar todos os Yonkous", correto: false },
                { opcao: "Proteger sua ilha", correto: false }
            ]
        },
        {
            pergunta: "Quem possui o Sharingan em Naruto?",
            respostas: [
                { opcao: "Sasuke Uchiha", correto: true },
                { opcao: "Rock Lee", correto: false },
                { opcao: "Kakashi Hatake", correto: false }
            ]
        },
        {
            pergunta: "Como se chama o poder final de Ichigo em Bleach?",
            respostas: [
                { opcao: "Bankai", correto: true },
                { opcao: "Reiatsu", correto: false },
                { opcao: "Getsuga Tenshou", correto: false }
            ]
        }
    ];

    let perguntasFilmes = [
        {
            pergunta: "Qual o nome do pai de Luke Skywalker?",
            respostas: [
                { opcao: "Anakin Skywalker", correto: true },
                { opcao: "Obi-Wan Kenobi", correto: false },
                { opcao: "Han Solo", correto: false }
            ]
        },
        {
            pergunta: "Qual a nave principal da franquia Star Trek?",
            respostas: [
                { opcao: "USS Enterprise", correto: true },
                { opcao: "Millennium Falcon", correto: false },
                { opcao: "X-Wing", correto: false }
            ]
        },
        {
            pergunta: "Quem lidera os Vingadores?",
            respostas: [
                { opcao: "Capitão América", correto: true },
                { opcao: "Homem de Ferro", correto: false },
                { opcao: "Hulk", correto: false }
            ]
        },
        {
            pergunta: "Quem é o principal antagonista em Alien (1979)?",
            respostas: [
                { opcao: "O Xenomorfo", correto: true },
                { opcao: "Ripley", correto: false },
                { opcao: "Ash (androide)", correto: false }
            ]
        },
        {
            pergunta: "Qual sabre de luz Luke usa em O Império Contra-Ataca?",
            respostas: [
                { opcao: "O de Anakin", correto: true },
                { opcao: "O de Obi-Wan", correto: false },
                { opcao: "O seu próprio", correto: false }
            ]
        },
        {
            pergunta: "Qual raça é inimiga da Federação em Star Trek?",
            respostas: [
                { opcao: "Klingons", correto: true },
                { opcao: "Jawas", correto: false },
                { opcao: "Skrulls", correto: false }
            ]
        },
        {
            pergunta: "Qual a joia que o Visão possui na testa?",
            respostas: [
                { opcao: "Joia da Mente", correto: true },
                { opcao: "Joia do Tempo", correto: false },
                { opcao: "Joia da Realidade", correto: false }
            ]
        },
        {
            pergunta: "Quem é a protagonista da saga Alien?",
            respostas: [
                { opcao: "Ellen Ripley", correto: true },
                { opcao: "Leia Organa", correto: false },
                { opcao: "Gamora", correto: false }
            ]
        },
        {
            pergunta: "Quem é o criador da Estrela da Morte?",
            respostas: [
                { opcao: "Império Galáctico", correto: true },
                { opcao: "República", correto: false },
                { opcao: "Jedi", correto: false }
            ]
        },
        {
            pergunta: "Qual Vingador é considerado um deus?",
            respostas: [
                { opcao: "Thor", correto: true },
                { opcao: "Hulk", correto: false },
                { opcao: "Homem de Ferro", correto: false }
            ]
        }
    ];

    let perguntasHistoriaBrasil = [
        {
            pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
            respostas: [
                { opcao: "1889", correto: true },
                { opcao: "1822", correto: false },
                { opcao: "1500", correto: false }
            ]
        },
        {
            pergunta: "Quem foi o primeiro presidente do Brasil?",
            respostas: [
                { opcao: "Deodoro da Fonseca", correto: true },
                { opcao: "Getúlio Vargas", correto: false },
                { opcao: "Dom Pedro II", correto: false }
            ]
        },
        {
            pergunta: "Quem proclamou a independência do Brasil?",
            respostas: [
                { opcao: "Dom Pedro I", correto: true },
                { opcao: "Tiradentes", correto: false },
                { opcao: "Dom João VI", correto: false }
            ]
        },
        {
            pergunta: "O que aconteceu em 1500 no Brasil?",
            respostas: [
                { opcao: "Descobrimento do Brasil", correto: true },
                { opcao: "Proclamação da República", correto: false },
                { opcao: "Inconfidência Mineira", correto: false }
            ]
        },
        {
            pergunta: "Qual era a principal atividade econômica do Brasil colonial?",
            respostas: [
                { opcao: "Cultivo de cana-de-açúcar", correto: true },
                { opcao: "Extração de petróleo", correto: false },
                { opcao: "Criação de gado", correto: false }
            ]
        },
        {
            pergunta: "Quem liderou a Inconfidência Mineira?",
            respostas: [
                { opcao: "Tiradentes", correto: true },
                { opcao: "José Bonifácio", correto: false },
                { opcao: "Dom Pedro II", correto: false }
            ]
        },
        {
            pergunta: "Qual era o nome do império português que dominava o Brasil?",
            respostas: [
                { opcao: "Império Português", correto: true },
                { opcao: "Império Espanhol", correto: false },
                { opcao: "Império Napoleônico", correto: false }
            ]
        },
        {
            pergunta: "Quem foi Getúlio Vargas?",
            respostas: [
                { opcao: "Presidente do Brasil", correto: true },
                { opcao: "Imperador do Brasil", correto: false },
                { opcao: "Explorador português", correto: false }
            ]
        },
        {
            pergunta: "Qual movimento levou ao fim da escravidão no Brasil?",
            respostas: [
                { opcao: "Abolicionismo", correto: true },
                { opcao: "Revolução Farroupilha", correto: false },
                { opcao: "Golpe Militar", correto: false }
            ]
        },
        {
            pergunta: "Quem assinou a Lei Áurea?",
            respostas: [
                { opcao: "Princesa Isabel", correto: true },
                { opcao: "Dom Pedro II", correto: false },
                { opcao: "Marechal Deodoro", correto: false }
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

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
