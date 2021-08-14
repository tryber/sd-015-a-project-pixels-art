let pixelsBoard = document.createElement("div");
pixelsBoard.id = "pixel-board";
document.body.appendChild(pixelsBoard);

function pixels25() { 
    for (let countPx = 1; countPx <= 25; countPx += 1) {
        let board = document.createElement("div");
        board.className = "pixel";
        pixelsBoard.appendChild(board);
    }
} pixels25();

let firstColor = document.querySelector(".black");
function changeBlackClass() {
    firstColor.classList.add("selected");
} changeBlackClass();

let initialColors = document.getElementsByClassName("color");
for(let index of initialColors) {
index.addEventListener("click", selectColor);
}
function selectColor(event) {
    let colors = document.querySelectorAll(".color");
    for (let index of colors) {
        index.classList.remove("selected");
        event.target.classList.add("selected");
    }
}

const allPixels = document.getElementsByClassName("pixel");
for(let index of allPixels) {
    index.addEventListener("click", putColor);
}
function putColor(event) {
    let clicked = document.querySelector(".selected")
    let change = getComputedStyle(clicked);
        event.target.style.backgroundColor = change.backgroundColor;
}

const createButton = document.createElement("button");
function cleanButton() {
createButton.id = "clear-board";
createButton.innerText = "Limpar";
const colorPalette = document.getElementById("color-palette");
colorPalette.appendChild(createButton);
createButton.style.display = "block";
createButton.style.margin = "10px 0px 0px 110px";
} cleanButton();

createButton.addEventListener("click", allPixelsWhite);
function allPixelsWhite() {
for(let index of allPixels) {
index.style.backgroundColor = "white";
}
}