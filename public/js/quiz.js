fetch('perguntas.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error('Erro ao carregar perguntas:', err));

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0;
let acertos = 0;

async function carregarPerguntas(topico) {
    const response = await fetch('perguntas.json');
    const data = await response.json();
    const perguntasTopico = data[topico];

    iniciarQuiz(perguntasTopico)
}

// PARTE 4: Função para carregar uma nova pergunta
function iniciarQuiz() {
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
                carregarPerguntas();
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
carregarPerguntas();

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
