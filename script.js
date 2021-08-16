let rowcol = 5;
let board = document.getElementById("pixel-board");
// let allColors = document.querySelector(".color");
let blkSelec = document.getElementById("black");
let blueSelec = document.getElementById("blue");
let brwnSelec = document.getElementById("brown");
let redSelec = document.getElementById("red");
let getSelec = document.querySelector(".selected");

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
    let getSelec = document.querySelector(".selected");
    if (getSelec.classList.contains('selected')) {
        getSelec.classList.remove('selected');
        console.log("funfou");
    }
    blkSelec.classList.add('selected');
}

blueSelec.addEventListener('click', selecAzul);
function selecAzul() {
    let getSelec = document.querySelector(".selected");
    if (getSelec.classList.contains('selected')) {
        getSelec.classList.remove('selected');
        console.log("funfou");
    }
    blueSelec.classList.add('selected');
}

brwnSelec.addEventListener('click', selecMarr);
function selecMarr() {
    let getSelec = document.querySelector(".selected");
    if (getSelec.classList.contains('selected')) {
        getSelec.classList.remove('selected');
        console.log("funfou");
    }
    brwnSelec.classList.add('selected');
}

redSelec.addEventListener('click', selecVerm);
function selecVerm() {
    let getSelec = document.querySelector(".selected");
    if (getSelec.classList.contains('selected')) {
        getSelec.classList.remove('selected');
        console.log("funfou");
    }
    redSelec.classList.add('selected');
}

