
let winner = true;

function checkFloor(event) {
    const btn = event.currentTarget;
    const playerChoice = parseInt(btn.dataset.pos);
    const round = parseInt(btn.closest('.floor').dataset.round);

    const brokenFloor = Math.floor(Math.random() * 3) + 1;

    console.log(`Andar ${round} | Escolha: ${playerChoice} | Piso Quebrado: ${brokenFloor}`);

    if (playerChoice === brokenFloor) {
        console.log(`O vidro quebrou ! Acabou pra você`);
        btn.style.backgroundColor = "red";
        btn.innerText = "Quebrou!!!"
        winner = false;
        disableButtons();
    } else {
        btn.style.backgroundColor = "green";
        btn.innerText = "Seguro!!!";
        console.log(`Você passou ! O piso quebrado estava na ponte ${brokenFloor}`);
        disabledFloor(event);
        if (round === 5) {
            if (winner) {
                disableButtons();
                console.log(`Parabéns! Você ganhou!!!`);
            };
        };
    };
};

function disabledFloor(event) {
    const round = event.currentTarget.closest('.floor');
    round.querySelectorAll('button').forEach(btn => btn.disabled = true);
};

function disableButtons() {
    document.querySelectorAll('.btnFloor').forEach(btn => btn.disabled = true);
};

function restart() {
    winner = true;
    document.querySelectorAll('.btnFloor').forEach(btn => {
        btn.disabled = false;
        btn.innerText = `Painel ${btn.dataset.pos}`;
        btn.style.backgroundColor = "";
    });
};

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
