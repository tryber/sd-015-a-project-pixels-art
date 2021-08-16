let pixelBoardConfig = {
    colums: 5,
    lines: 5
}

function reloadPage() {

let colorNumbers = document.getElementsByClassName('color').length

let pixelBoard = document.querySelector('#pixel-board')

document.getElementById("selected-color-box").style.background = 'black';

document.getElementById('black').classList.add('selected'); // https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

for (let i = 0; i < colorNumbers; i++) {
document.getElementsByClassName('color')[i].addEventListener('click', selectColor);
}

for (let i = 0; i < pixelBoardConfig.lines; i += 1) {
    let newLine= document.createElement('div')
    let lineId = 'line' + (i+1).toString()
    pixelBoard.appendChild(newLine).className = 'line'
    document.querySelectorAll('.line')[i].id = lineId

    for (let n = 0; n < pixelBoardConfig.colums; n += 1) {
        let newColum = document.createElement('div')
        let columId = 'pixel-board-c' + (n+1).toString()
        document.querySelectorAll('.line')[i].appendChild(newColum).className = 'pixel'
    }

}

for (let i = 0; i < (pixelBoardConfig.lines * pixelBoardConfig.colums); i += 1) {
    document.querySelectorAll('.pixel')[i].addEventListener('click', paintPixel);
   // document.querySelectorAll('.pixel')[i].addEventListener('click', selectColor);
} }

window.onload = function() {
    reloadPage()
}


function selectColor(color) {
    document.getElementsByClassName('selected')[0].classList.remove('selected'); // reseta cor selecionada
    document.getElementById(color.target.id).classList.add('selected'); // coloca na nova cor a classe selected
    document.getElementById("selected-color-box").style.background = color.target.id;
}

function paintPixel(color) {
    color.target.style.background = document.getElementById("selected-color-box").style.background;
    
}

function clearBoard() {
    for (let i = 0; i < (document.querySelectorAll('.pixel').length); i += 1) {
        document.querySelectorAll('.pixel')[i].style.background = 'white';
    }
}

function resizeBoard() {
    if ( document.getElementById('board-size').value < 1 ) {
        alert('Board inválido!')
    }
    else if ( document.getElementById('board-size').value < 5 ) {
        document.querySelectorAll('.pixel').forEach(function(a){ //https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
        a.remove()})
        pixelBoardConfig.colums = 5
        pixelBoardConfig.lines = 5
        reloadPage()
    }

    else if ( document.getElementById('board-size').value > 50 ) {
        document.querySelectorAll('.pixel').forEach(function(a){ //https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
        a.remove()})
        pixelBoardConfig.colums = 50
        pixelBoardConfig.lines = 50
        reloadPage()
    }

    else {
        document.querySelectorAll('.pixel').forEach(function(a){ //https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
        a.remove()})
        pixelBoardConfig.colums = document.getElementById('board-size').value
        pixelBoardConfig.lines = document.getElementById('board-size').value
        reloadPage()
    }
}