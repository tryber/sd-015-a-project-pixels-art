function randomColors () {
    let randomOne = (Math.round(Math.random()*255));
    let randomTwo = (Math.round(Math.random()*255));
    let randomThree = (Math.round(Math.random()*255));
    let randomRGB = 'rgb('+randomOne+', '+randomTwo+', '+randomThree+')';
    return randomRGB;
}

function createItemsPalette(n) {
    const palette = document.querySelectorAll('#color-palette');
    for (let i = 0; i < n; i +=1) {
        let itemPalette = document.createElement('li');
        itemPalette.className = 'color';
        palette[0].appendChild(itemPalette);
        if (i === 0) {
            itemPalette.style.backgroundColor = 'rgb(0, 0, 0)';
        } else {
            itemPalette.style.backgroundColor = randomColors();
        }
    }
}
createItemsPalette(4);

function removeLines () {
    let parent = document.getElementById('pixel-board');
    let line = document.querySelectorAll('.lines');
    for (let i = 0; i < line.length; i += 1) {
        parent.removeChild(line[i]);
    }
}
const buttonVqv = document.getElementById('generate-board');
buttonVqv.addEventListener('click', resizeBoard);
function resizeBoard () {
    let inputValue = document.getElementById('board-size').value;
    if (inputValue === "") {
        alert("Board Inválido!")
    } else {
        removeLines();
        let numberValue = parseInt(inputValue, 10);
        if (numberValue < 5) {
            numberValue = 5;
            createDiv(numberValue);
            alert("5 é o valor mínimo!");
        } else if (numberValue > 50) {
            numberValue = 50;
            createDiv(numberValue);
            alert("50 é o valor máximo!");
        } else {
            createDiv(numberValue);
        }
        
    }
}

//Cria 5 divs filhas do board que serão as linhas
const board = document.getElementById('pixel-board');
function createDiv(n) {
    for (let i = 1; i <= n; i += 1) {
    let line = document.createElement('div');
    line.className = 'lines';
    board.appendChild(line);
    }
    createPixels();
}

function conditionToCreate () {
    let inputValue = document.getElementById('board-size').value
    if (inputValue === "") {
        createDiv(5)
    }
}
conditionToCreate();


function createPixels() {
    let lines = document.querySelectorAll(".lines");
    for (let index = 0; index < lines.length; index += 1) {
        for (let index2 = 1; index2 <= lines.length; index2 += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            lines[index].appendChild(pixel);
        }
    }
    pixelsListener();
}
window.onload = colorOnload;
const color = document.getElementsByClassName('color');
function colorOnload () {
    let colorBlack = color[0];
    colorBlack.classList.add('selected');
}
colorOnload();

const palette = document.querySelector('#color-palette');
palette.addEventListener('click', selecionaCor);
function selecionaCor (event) {
    let colorCurrent = document.querySelector('.selected');
    colorCurrent.classList.remove('selected');
    event.target.classList.add('selected');
    
}
function pixelsListener () {
    let pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener('click', paintPixels);
    }
}


function paintPixels (event) {
    let colorCurrent = document.querySelector('.selected');
    let rgbColorCurrent = colorCurrent.style.backgroundColor;
    event.target.style.backgroundColor = rgbColorCurrent;
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearPixels);
function clearPixels () {
    let divPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < divPixel.length; index += 1) {
        if (divPixel[index].style.backgroundColor !== 'white') {
            divPixel[index].style.backgroundColor = 'white';
        }                                                 
    }
}