const questionElement = document.querySelector(".question");
const answersElement = document.querySelector(".answers");
const progressElement = document.querySelector(".progress");
const finalText = document.querySelector(".end span");
const content = document.querySelector(".content");
const finalContent = document.querySelector(".end");

let questions = [];

fetch('perguntas.json')
    .then(res => res.json())
    .then(data => {
        const selectElement = document.getElementById('subject');

        selectElement.addEventListener('change', () => {
            const selectedOption = selectElement.options[selectElement.selectedIndex];
            const topic = selectedOption.dataset.topic;

            if (topic && data[topic]) {
                startQuiz(data[topic]);
            }
        });
    })
    .catch(err => console.error('Erro ao carregar perguntas:', err));

let indexCurrent = 0;
let hits = 0;

async function loadQuestions(topic) {
    const response = await fetch('perguntas.json');
    const data = await response.json();
    const questionsTopic = data[topic];

    startQuiz(questionsTopic)
}

function startQuiz(questionsTopic) {
    questions = questionsTopic;
    indexCurrent = 0;
    hits = 0;

    content.style.display = "block";
    finalContent.style.display = "none";

    showQuestion();
};

function showQuestion() {
    progressElement.innerHTML = `${indexCurrent + 1}/${questions.length}`;

    const currentQuestion = questions[indexCurrent];
    questionElement.innerHTML = currentQuestion.pergunta;

    answersElement.innerHTML = "";

    for (let i = 0; i < currentQuestion.respostas.length; i++) {
        const answer = currentQuestion.respostas[i];
        const btn = document.createElement("button");
        btn.classList.add("answer-button");
        btn.innerText = answer.opcao;

        btn.onclick = () => {
            if (answer.correto) hits++;
            indexCurrent++;

            if (indexCurrent < questions.length) {
                showQuestion();
            } else {
                finishGame();
            };
        };
        answersElement.appendChild(btn);
    };
};

function finishGame() {
    finalText.innerHTML = `Você acertou ${hits} de ${questions.length}`;
    content.style.display = "none";
    finalContent.style.display = "flex";
};

function restart() {
    indexCurrent = 0;
    hits = 0;

    content.style.display = "none";
    finalContent.style.display = "none";

    const selectElement = document.getElementById('subject');
    selectElement.selectedIndex = 0;

    questionElement.innerHTML = "";
    answersElement.innerHTML = "";
    progressElement.innerHTML = "";

    questions = [];
};

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
