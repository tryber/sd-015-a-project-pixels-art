const palette = document.getElementById('color-palette');
const colors = ['rgb(0, 0, 0)', 'rgb(142, 35, 107)', 'rgb(255, 127, 0)', 'rgb(33, 94, 33)'];
const board = document.getElementById('pixel-board');


function createItemsPalette() {
    for (let color of colors) {
        let itemPalette = document.createElement('li');
        itemPalette.className = 'color';
        itemPalette.style.width = '50px';
        itemPalette.style.height = '50px';
        itemPalette.style.display = 'inline-block';
        itemPalette.style.borderWidth = '1px';
        itemPalette.style.borderStyle = 'solid';
        itemPalette.style.borderColor = 'black';
        itemPalette.style.backgroundColor = color;
        palette.appendChild(itemPalette);
    }
}
createItemsPalette();

//Cria 5 divs filhas do board que serão as linhas
function createDiv(n) {
    for (let i = 1; i <= n; i += 1) {
    let line = document.createElement('div');
    line.className = 'lines';
    board.appendChild(line);
    }
}
createDiv(5);

const lines = document.querySelectorAll(".lines");
function createPixels() {
    for (let index = 0; index < lines.length; index += 1) {
        for (let index2 = 1; index2 <= lines.length; index2 += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = 'white';
            lines[index].appendChild(pixel);
        }
    }
}
createPixels()



window.onload = colorOnload;
const color = document.getElementsByClassName('color');
function colorOnload () {
    let colorBlack = color[0];
    colorBlack.classList.add('selected');
    let selectColor = document.querySelector('.selected');
}
colorOnload();

palette.addEventListener('click', selecionaCor);
function selecionaCor (event) {
    let colorCurrent = document.querySelector('.selected');
    colorCurrent.classList.remove('selected');
    event.target.classList.add('selected');
    
}
board.addEventListener('click', paintPixels);
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