window.onload = function() {
        let black = document.getElementsByClassName("black")[0]
        black.className = black.className + " selected"
}



const quadro = document.querySelector("#pixel-board");
let colors = document.getElementById("cores")
let selectedColor = document.getElementsByClassName("black")[0]


createSpans();

function createSpans() {
    for (let index = 1; index <= 29; index += 1) {
        if (index === 6 | index === 12 | index === 18 | index === 24) {
            let br = document.createElement('br');
            quadro.appendChild(br);
        } else {
            let span = document.createElement('span');
            span.className = "pixel"
            quadro.appendChild(span);
        }
    }
}



colors.addEventListener("click", getColor);

function getColor (event) {
    selectedColor.classList.remove("selected")
    selectedColor = event.target;
    selectedColor.className = selectedColor.className + " selected";
}