let square = document.getElementById("square");
let position = 0;

// function doDemo(button) {
//     square.style.backgroundColor = "#3a7980";
//     // square.style.position = "-y 35";
//     button.setAttribute("disabled", "true");
//     setTimeout(clearDemo, 2000, button);
// };

// function clearDemo(button) {
//     square.style.backgroundColor = "#b00720";
//     button.removeAttribute("disabled");
// };

// function move(button) {
//     const interval = setInterval(() => {
//         if (position >= 300) {
//             clearInterval(interval);
//         } else {
//             position += 5;
//             square.style.left = position + "px";
//         };
//     }, 30);

//     setTimeout(positionZero, 2000, button);
// };

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