const palette = document.getElementById('color-palette');
const colors = ['rgb(0, 0, 0)', 'rgb(142, 35, 107)', 'rgb(255, 127, 0)', 'rgb(33, 94, 33)'];
const board = document.getElementById('pixel-board');


function createItemsPalette() {
    for (let color of colors) {
        let itemPalette = document.createElement('li');
        itemPalette.className = 'color';
        itemPalette.style.width = '100px';
        itemPalette.style.height = '100px';
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
            lines[index].appendChild(pixel);
        }
    }
}
createPixels()
