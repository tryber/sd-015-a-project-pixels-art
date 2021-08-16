window.onload = function() {
    let primeiraCor = document.querySelector(".color");
    primeiraCor.classList.add("selected");
}

let segundaCor = document.querySelector("#segundaCor");
let terceiraCor = document.querySelector("#terceiraCor");
let quartaCor = document.querySelector("#quartaCor");

primeiraCor.addEventListener("click",adicionarClasseSelected);
segundaCor.addEventListener("click",adicionarClasseSelected);
terceiraCor.addEventListener("click",adicionarClasseSelected);
quartaCor.addEventListener("click",adicionarClasseSelected);

primeiraCor.style.backgroundColor = "black";
segundaCor.style.backgroundColor = "blue";
terceiraCor.style.backgroundColor = "chocolate";
quartaCor.style.backgroundColor = "deeppink";
pixelBoard.addEventListener('click', changeColor);
let pixelBoard = document.getElementById("pixel-board");

function adicionarClasseSelected (evento) {
    let selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    evento.target.classList.add("selected");
}

function changeColor(event) {
    let colorSelected = document.querySelector(".selected").style.backgroundColor;
    event.target.style.backgroundColor = colorSelected;
}
