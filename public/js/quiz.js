const questionElement = document.querySelector(".question");
const answersElement = document.querySelector(".answers");
const progressElement = document.querySelector(".progress");
const finalText = document.querySelector(".end span");
const content = document.querySelector(".content");
const finalContent = document.querySelector(".end");

let perguntas = [];

fetch('perguntas.json')
    .then(res => res.json())
    .then(data => {
        const selectElement = document.getElementById('subject');

        selectElement.addEventListener('change', () => {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const topic = selectedOption.dataset.topic;

            if (topic && data[topic]) {
                perguntas = data[topic];
                iniciarQuiz();
            }
        });
        console.log(data);
    })
    .catch(err => console.error('Erro ao carregar perguntas:', err));

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0;
let acertos = 0;

async function carregarPerguntas(topic) {
    const response = await fetch('perguntas.json');
    const data = await response.json();
    const perguntasTopico = data[topic];

    iniciarQuiz(perguntasTopico)
}

// PARTE 4: Função para carregar uma nova pergunta
function iniciarQuiz() {
    progressElement.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;

    const perguntaAtual = perguntas[indiceAtual];
    questionElement.innerHTML = perguntaAtual.pergunta;

    answersElement.innerHTML = "";

    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        const answer = perguntaAtual.respostas[i];
        const btn = document.createElement("button");
        btn.classList.add("answer-button");
        btn.innerText = answer.opcao;
        btn.onclick = function () {
            // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
            if (answer.correto) {
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
        answersElement.appendChild(btn);
    };
};

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
    finalText.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
    content.style.display = "none";
    finalContent.style.display = "flex";
};

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPerguntas();

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
