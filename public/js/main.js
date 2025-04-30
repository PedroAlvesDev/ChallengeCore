document.querySelectorAll(".game-btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        location.href = `${game}.html`;
    });
});

// document.querySelector('#back').forEach((btn) => {
//     btn.addEventListener('click', () => {
//     location.href = `index.html`;
//     })
// })