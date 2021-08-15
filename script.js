//Botão para limpar o quadro
let btnClear = document.getElementById('clear-board')
btnClear.addEventListener('click', limparQuadro);
function limparQuadro () {
    let todosPixel = document.querySelectorAll('.pixel')
    for (let i = 0; i < todosPixel.length; i++) {
        todosPixel[i].style.backgroundColor = 'white'
    }
}


//Defini o número de pixels
let btnGenerate = document.querySelector('#generate-board');
// Resgata o valor do input
btnGenerate.addEventListener('click', value);


function value () {
    let valueBoard = document.querySelector('#board-size').value;
    if (valueBoard <= 0 || valueBoard  === '') {
        alert('Board inválido!');
    }
    else generate();
}

// Gera o quadro novo
function generate () {
    let valueBoard = document.querySelector('#board-size').value;
    if (valueBoard > 50) {
        valueBoard = 50;
    }
    if (valueBoard < 5) {
        valueBoard = 5
    }
    console.log(valueBoard)
    //Apaga todo o quadro
    let pixelBoard = document.querySelector('#pixel-board')
    let borderPixel = document.querySelector('.border-pixel-board');
    pixelBoard.removeChild(borderPixel);

    //Cria um novo quadro
    let createBorderPixel = document.createElement('div')
    pixelBoard.appendChild(createBorderPixel).className = 'border-pixel-board';

    //Cria as linhas
    for (let i = 0; i < valueBoard; i++){
        let createLine = document.createElement('div');
        createBorderPixel.appendChild(createLine).className = 'linha';
    }

    // Cria os pixels
    let lines = document.querySelectorAll('.linha')
    for (let i = 0; i < lines.length; i++) {
    for (let i = 0; i < lines.length; i++) {
        let createPixel = document.createElement('div')
        lines[i].appendChild(createPixel).className = 'pixel';
    } 
    }
    // Chama a função para atualizar a lista de pixel
    paintPixel();
}


// Gerador de cores aleatórias
let borderColor = document.querySelector('.border')
let color = document.createElement('li')

borderColor.appendChild(color).className = 'color selected'
color.style.backgroundColor = 'black';
for (let i = 0; i < 3; i++){
    let color = document.createElement('li')
    borderColor.appendChild(color).className = 'color'
    let a = Math.random() * 255 + 1
    let b = Math.random() * 255 + 1;
    let c = Math.random() * 255 + 1;
    color.style.backgroundColor = 'rgb' + '(' + a + ',' + b + ',' + c + ')';
}





//Seleciona a cor
let cor = document.querySelectorAll('.color');
let selected = document.querySelector('.selected')
for (let i = 0; i < cor.length; i++) {
    cor[i].addEventListener('click', trocaCor)
    function trocaCor () {
        selected.classList.remove('selected');
        cor[i].classList.add('selected');
        selected = cor[i];
    }
}

//Pinta o pixel com a cor selecionada
function paintPixel () {
    let pixel = document.querySelectorAll('.pixel')
    for (let i = 0; i < pixel.length; i++){
        pixel[i].addEventListener('click', pintar)
        function pintar (){
            console.log(selected.style.backgroundColor)
            pixel[i].style.backgroundColor = selected.style.backgroundColor
        }
    }
    }

window.onload = function () {
  paintPixel();
}