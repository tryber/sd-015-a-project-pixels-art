let rowcol = 5;
let board = document.getElementById("pixel-board");
let blkSelec = document.getElementById("black");
let blueSelec = document.getElementById("blue");
let brwnSelec = document.getElementById("brown");
let redSelec = document.getElementById("red");
let button = document.getElementById("clear-board");

window.onload = blkSelec.classList.add("selected");

function pxlgrid() {
    for (let i = 0; i < rowcol; i += 1) {
        let test = document.createElement("div");
        test.className = "pixels";
        board.appendChild(test);
        for (let ind = 0; ind < rowcol; ind += 1) {
            let test2 = document.createElement("div");
            test2.className = "pixel";
            test.appendChild(test2);
        }
    }
}
pxlgrid()

blkSelec.addEventListener('click', selecPreto);
function selecPreto() {
    let selec = document.querySelector(".selected");
    if (selec.classList.contains('selected')) {
        selec.classList.remove('selected');
    }
    blkSelec.classList.add('selected');
}

blueSelec.addEventListener('click', selecAzul);
function selecAzul() {
    let selec = document.querySelector(".selected");
    if (selec.classList.contains('selected')) {
        selec.classList.remove('selected');
    }
    blueSelec.classList.add('selected');
}

brwnSelec.addEventListener('click', selecMarr);
function selecMarr() {
    let selec = document.querySelector(".selected");
    if (selec.classList.contains('selected')) {
        selec.classList.remove('selected');
    }
    brwnSelec.classList.add('selected');
}

redSelec.addEventListener('click', selecVerm);
function selecVerm() {
    let selec = document.querySelector(".selected");
    if (selec.classList.contains('selected')) {
        selec.classList.remove('selected');
    }
    redSelec.classList.add('selected');
}

//Para as funções getPaint e paintPix usei como base threads de dúvida do slack, principalmente esta: https://trybecourse.slack.com/archives/C0273HYKPGT/p1628896978132400 
function getPaint(event) {
    let selec = document.querySelector(".selected");
    let paint = window.getComputedStyle(selec).getPropertyValue('background-color');
    event.target.style.backgroundColor = paint;
}

function paintPix() {
    let pxlselec = document.querySelectorAll(".pixel");
    for (let i = 0; i < pxlselec.length; i += 1) {
        pxlselec[i].addEventListener("click", getPaint);
    }
}
paintPix();

button.addEventListener("click", clearAll);
function clearAll() {
    let pxlselec = document.querySelectorAll(".pixel");
    for (let i = 0; i < pxlselec.length; i += 1) {
        pxlselec[i].style.backgroundColor = "white";
    }
}
