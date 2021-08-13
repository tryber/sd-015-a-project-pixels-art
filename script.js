

window.onload = function colors() {
    for(let i = 0; i < 25; i += 1) {
        document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white'
    }
}

const clearBoard = document.getElementById('clear-board');
const firstColor = document.getElementById('firstColor');
firstColor.style.backgroundColor = 'black';
const secondColor = document.getElementById('secondColor');
secondColor.style.backgroundColor = 'green';
const thirdColor = document.getElementById('thirdColor');
thirdColor.style.backgroundColor = 'yellow';
const fourthColor = document.getElementById('fourthColor');
fourthColor.style.backgroundColor = 'purple';

paletteListener();
pixelBoardListener();

function selectColor(paletteClick) {
    let selected = document.getElementsByClassName('selected')[0];
    selected.classList.remove('selected');
    paletteClick.target.classList.add('selected');
}

function printColor(pixelClick) {
    pixelClick.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function paletteListener() {
    let colorPalette = document.getElementsByClassName('color');
    for(let i = 0; i < colorPalette.length; i += 1) {
        colorPalette[i].addEventListener('click', selectColor);
    } 
}

function pixelBoardListener() {
    let pixelBoard = document.getElementsByClassName('pixel');
    for(let i = 0; i < pixelBoard.length; i += 1) {
        pixelBoard[i].addEventListener('click', printColor);
    }
}

function clearAll () {
    for(let i = 0; i < 25; i += 1) {
        document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white'
    }
}

clearBoard.addEventListener('click', clearAll);

