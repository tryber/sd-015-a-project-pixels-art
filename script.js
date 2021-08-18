window.onload = function() {
        let black = document.getElementsByClassName("black")[0]
        black.className = black.className + " selected"
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
            pixel.style.backgroundColor = "black";
        } else if (selecionado.className === "color yellow selected") {
            pixel.style.backgroundColor = "yellow";
        } else if (selecionado.className === "color red selected") {
            pixel.style.backgroundColor = "red";
        } else if (selecionado.className === "color purple selected") {
            pixel.style.backgroundColor = "purple";
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