const pixelsBoard = document.createElement("div");
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
for (let index of initialColors) {
    index.addEventListener("click", selectColor);
}
const colors = document.querySelectorAll(".color");
function selectColor(event) {
    for (let index of colors) {
        index.classList.remove("selected");
        event.target.classList.add("selected");
    }
}

const allPixels = document.getElementsByClassName("pixel");
for (let index of allPixels) {
    index.addEventListener("click", putColor);
}
function putColor(event) {
    let clicked = document.querySelector(".selected")
    let change = getComputedStyle(clicked);
    event.target.style.backgroundColor = change.backgroundColor;
}

const createButton = document.createElement("button");
const colorPalette = document.getElementById("color-palette");
function cleanButton() {
    createButton.id = "clear-board";
    createButton.innerText = "Limpar";
    colorPalette.appendChild(createButton);
    createButton.style.float = "block";
    createButton.style.margin = "25px 65px 12px 10px";
    createButton.style.padding = "10px";
    createButton.style.backgroundColor = "black";
    createButton.style.color = "white";
} cleanButton();

createButton.addEventListener("click", allPixelsWhite);
function allPixelsWhite() {
    for (let index of allPixels) {
        index.style.backgroundColor = "white";
    }
}

const createInput = document.createElement("input");
function addInput() {
    createInput.id = "board-size";
    createButton.appendChild(createInput);
    createInput.style.marginLeft = "5px";
} addInput();

const vqv = document.createElement("button");
function buttonVQV() {
    vqv.id = "generate-board";
    vqv.innerText = "VQV";
    createButton.appendChild(vqv);
    vqv.style.marginLeft = "10px";
} buttonVQV();



//Código para clicar no botão VQV
vqv.addEventListener("click", adicionaPixels);
const input = document.querySelector("#board-size");
input.min = 1;
input.type = "number";
function adicionaPixels() {
    let n = parseInt(input.value);
    pixelsBoard.innerHTML = "";
    if (input.value === "") {
        alert("Board inválido!");
    } else if (input.value < 5) {
        n = 5;
    } else if (input.value > 50) {
        n = 50;
    }
    pixelsBoard.style.width = (49.5 * n) + "px";
    pixelsBoard.style.height = pixelsBoard.style.width;
    for (let index = 0; index < n; index += 1) {
        let createNewPixel = document.createElement("div");
        createNewPixel.className = "pixel";
        pixelsBoard.appendChild(createNewPixel);
        for (let index = 1; index < n; index += 1) {
            let createNewPixel = document.createElement("div");
            createNewPixel.className = "pixel";
            pixelsBoard.appendChild(createNewPixel);
        }
    }
    let createNewPixel = document.querySelectorAll(".pixel");
    for(let index of createNewPixel) {
        index.addEventListener("click", putColor);
    }
    }
    function generateRandomColor() {
       for(let index = 1; index < colors.length; index += 1) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
           colors[index].style.backgroundColor =`rgb(${r}, ${g}, ${b})`; 
       }
    } window.onload = generateRandomColor();

