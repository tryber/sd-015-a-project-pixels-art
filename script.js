window.onload = function() {
        let palette1 = document.querySelectorAll("#color-palette")[0]
        palette1.className = palette1.className + " selected"
        palette1.style.backgroundColor = "black";

        let palette2 = document.querySelectorAll("#color-palette")[1]
        let hashtag2 = "#"
        let randomColor2 = Math.floor(Math.random()*16777215).toString(16); 
        // O código da linha 8, 14 e 19 eu fui auxiliado pelo site https://css-tricks.com/snippets/javascript/random-hex-color/ 
        palette2.style.backgroundColor = hashtag2 + randomColor2;

        let palette3 = document.querySelectorAll("#color-palette")[2]
        let hashtag3 = "#"
        let randomColor3 = Math.floor(Math.random()*16777215).toString(16);
        palette3.style.backgroundColor = hashtag3 + randomColor3;

        let palette4 = document.querySelectorAll("#color-palette")[3]
        let hashtag4 = "#"
        let randomColor4 = Math.floor(Math.random()*16777215).toString(16);
        palette4.style.backgroundColor = hashtag4 + randomColor4;
}



const quadro = document.querySelector("#pixel-board");
let colors = document.getElementById("cores")
let selectedColor = document.getElementsByClassName("black")[0]
const pixels = document.getElementById("pixel-board");
const spans = document.getElementsByTagName("span")
const botao = document.getElementsByTagName("button")[0];
const botaoWidth = document.querySelector("#generate-board")
const inputWidth = document.querySelector("#board-size")


createSpans();
function createSpans() {
    let spanNumber = 5;
    for (let index = 1; index <= (spanNumber * spanNumber) + (spanNumber - 1); index += 1) {
        if (index % (spanNumber + 1) === 0) {
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



pixels.addEventListener("click", paintPixel);

function paintPixel(event) {
    let pixel = event.target;
    let selecionado = document.getElementsByClassName("selected")[0]
    
    if (pixel.id === "pixel-board") {
        pixel.style.backgroundColor = "white";
    } else {
        if (selecionado.className === "color black selected") {
            let cor = document.querySelector("#color-palette")
            pixel.style.backgroundColor = cor.style.backgroundColor
        } else if (selecionado.className === "color yellow selected") {
            let cor = document.querySelectorAll("#color-palette")[1]
            pixel.style.backgroundColor = cor.style.backgroundColor
        } else if (selecionado.className === "color red selected") {
            let cor = document.querySelectorAll("#color-palette")[2]
            pixel.style.backgroundColor = cor.style.backgroundColor
        } else if (selecionado.className === "color purple selected") {
            let cor = document.querySelectorAll("#color-palette")[3]
            pixel.style.backgroundColor = cor.style.backgroundColor
        }
}
}

botao.addEventListener("click", limpaQuadro);

function limpaQuadro(event) {
    for (let index = 0; index < spans.length; index += 1) {
        let pixelAtual = spans[index];
        pixelAtual.style.backgroundColor = "white";
    }
}


botaoWidth.addEventListener("click", alteraTamanho);

function alteraTamanho(event) {
    let quadroChild = quadro.children;
    for (let index = (quadroChild.length - 1); index >= 0; index -= 1) {
        let actualChild = quadroChild[index]
        quadro.removeChild(actualChild)
    }
    let inputValue = inputWidth.value
    if (parseInt(inputValue) >= 5 && parseInt(inputValue) <= 50 && parseInt(inputValue).length == undefined) {
        function createSpans() {
            inputValue = parseInt(inputValue)
            let spanNumber = inputValue;
            for (let index = 1; index <= (spanNumber * spanNumber) + (spanNumber - 1); index += 1) {
                if (index % (spanNumber + 1) === 0) {
                    let br = document.createElement('br');
                    quadro.appendChild(br);
                } else {
                    let span = document.createElement('span');
                    span.className = "pixel"
                    quadro.appendChild(span);
                }
            }
        }
        createSpans();
    } else if (inputValue === "" && parseInt(inputValue) < 0 === false | inputValue < 5 && parseInt(inputValue) < 0 === false | typeof inputValue === "string" && parseInt(inputValue) < 0 === false) {
        alert("Board inválido!")
        function createSpans() {
            let spanNumber = 5;
            for (let index = 1; index <= (spanNumber * spanNumber) + (spanNumber - 1); index += 1) {
                if (index % (spanNumber + 1) === 0) {
                    let br = document.createElement('br');
                    quadro.appendChild(br);
                } else {
                    let span = document.createElement('span');
                    span.className = "pixel"
                    quadro.appendChild(span);
                }
            }
        }
        createSpans();
    } else if (parseInt(inputValue) > 50) {
        function createSpans() {
            let spanNumber = 50;
            for (let index = 1; index <= (spanNumber * spanNumber) + (spanNumber - 1); index += 1) {
                if (index % (spanNumber + 1) === 0) {
                    let br = document.createElement('br');
                    quadro.appendChild(br);
                } else {
                    let span = document.createElement('span');
                    span.className = "pixel"
                    quadro.appendChild(span);
                }
            }
        }
        createSpans();
    } else {
        function createSpans() {
            let spanNumber = 5;
            for (let index = 1; index <= (spanNumber * spanNumber) + (spanNumber - 1); index += 1) {
                if (index % (spanNumber + 1) === 0) {
                    let br = document.createElement('br');
                    quadro.appendChild(br);
                } else {
                    let span = document.createElement('span');
                    span.className = "pixel"
                    quadro.appendChild(span);
                }
            }
        }
        createSpans();
    }
}