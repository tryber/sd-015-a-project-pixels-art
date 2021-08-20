
// Requisito 06 - Define a cor preta como padrão de seleção (selected)
// Ref.: branch artur-bacilla-project-pixels-art
let selected = document.getElementById('color-palette');
let qtdColors = selected.children.length;

function clearSelected() {
    for (let i = 0; i < qtdColors; i += 1) {
        if (selected.children[i].classList.contains('selected')) {
            selected.children[i].classList.remove('selected');
        };
    }
}

function standardSelected() {
    let standard = document.getElementById('color1');
    standard.classList.add('selected');
}

standardSelected();

// Requisito 07 - Seleciona a cor para preenchimento do pixel
selected.addEventListener('click', selectColor);

function selectColor(color) {
    clearSelected();
    let selectColor = color.target;
    selectColor.classList.add('selected');

}

// Requisito 08


// Requisito 09
// Ref.: https://stackoverflow.com/questions/9436123/javascript-changing-a-class-style/65471649
let clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
function clearBoard() {
    let pixelUnit = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelUnit.length; i += 1) {
        pixelUnit[i].style.backgroundColor = 'rgb(255,255,255)';

}
}

// Requisito 10
// Ref.: https://github.com/tryber/exercise-end-block5
let numberOfBlocks = 5;
let pixelBoard = document.querySelector('#pixel-board');

for (i = 0; i < numberOfBlocks; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    
    for (let j = 0; j < numberOfBlocks; j += 1) {
        let block = document.createElement('div');
        block.className = 'pixel';
        pixelLine.appendChild(block);
    }
    
    pixelBoard.appendChild(pixelLine);

}
