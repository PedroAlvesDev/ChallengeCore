let square = document.getElementById("square");
let position = 0;

function move(button) {
    position += 5;
    square.style.left = position + "px";

    setTimeout(positionZero, button)
};

function positionZero(button) {
    const interval = setInterval(() => {
        if (position <= 0) {
            clearInterval(interval);
        } else {
            position -= 1;
            square.style.left = position + "px";
        };
    }, 30);
};

