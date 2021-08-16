window.onload = function() {
    let primeiraCor = document.querySelector(".color");
    primeiraCor.classList.add("selected");
}

let primeiraCor = document.querySelector(".primeiraCor");
let segundaCor = document.querySelector(".segundaCor");
let terceiraCor = document.querySelector(".terceiraCor");
let quartaCor = document.querySelector(".quartaCor");

function adicionarSelected (evento) {
    let eventoSelected = document.querySelector(".selected");
    eventoSelected.classList.remove("selected");
    evento.target.classList.add("selected");
}

primeiraCor.addEventListener("click",adicionarSelected);
segundaCor.addEventListener("click",adicionarSelected);
terceiraCor.addEventListener("click",adicionarSelected);
quartaCor.addEventListener("click",adicionarSelected);

let pixelBoard = document.querySelector("#pixel-board");
primeiraCor.style.backgroundColor = "black";
segundaCor.style.backgroundColor = "red";
terceiraCor.style.backgroundColor = "yellow";
quartaCor.style.backgroundColor = "blue";

function colorirPixel (evento) {
    let corSelected = document.querySelector(".selected").style.backgroundColor;
    evento.target.style.backgroundColor = corSelected;
}
pixelBoard.addEventListener("click",colorirPixel);


//Botao Clear:
let main = document.querySelector("main");
let botaoClear = document.createElement("button");
botaoClear.innerHTML = "Limpar Tudo!";
botaoClear.id = "clear-board";
main.appendChild(botaoClear);

let pixels = document.querySelectorAll(".pixel");

function clearBoard () {
    for (let index = 0; index < pixels.length; index += 1) {
        let pixel = pixels[index];
        pixel.style.backgroundColor = "white";
    }
}
botaoClear.addEventListener("click",clearBoard);

//Criando Input