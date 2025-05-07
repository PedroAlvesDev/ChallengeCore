let result = document.querySelector('.result');
let winner = true;

function checkFloor(event) {
    const btn = event.currentTarget;
    const playerChoice = parseInt(btn.dataset.pos);
    const round = parseInt(btn.closest('.floor').dataset.round);

    const brokenFloor = Math.floor(Math.random() * 3) + 1;


    if (playerChoice === brokenFloor) {
        btn.style.backgroundColor = "red";
        btn.innerText = "Quebrou!!!"
        winner = false;
        disableButtons();

        result.innerText = "O vidro se partiu… e com ele, sua última esperança. A queda foi inevitável.";
        result.style.marginBottom = "20px";

    } else {
        btn.style.backgroundColor = "green";
        btn.innerText = "Seguro!!!";
        disabledFloor(event);
        if (round === 5) {
            if (winner) {
                disableButtons();

                result.innerText = "Você venceu a escuridão com passos firmes. A coragem brilhou mais forte que o medo.";
                result.style.marginBottom = "20px";
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
        result.innerText = "";
        result.style.marginBottom = "";
    });
};

document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});
