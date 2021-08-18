const quadro = document.querySelector('#pixel-board');
for (let index = 0; index < 5; index += 1) {
    for (let indice = 0; indice < 5; indice += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel'
        quadro.appendChild(pixel)
    }
}
let clickBoard = document.getElementById('pixel-board')
clickBoard.addEventListener('click', printColor)
function printColor(event) {
    let selectedColor = document.querySelector('.selected')
    if (selectedColor == document.querySelector('#preta')) {
        event.target.style.backgroundColor = 'black'
    } else if (selectedColor == document.querySelector('#amarelo')) {
        event.target.style.backgroundColor = 'yellow'
    } else if (selectedColor == document.querySelector('#verde')) {
        event.target.style.backgroundColor = 'green'
    } else if (selectedColor == document.querySelector('#vermelho')) {
        event.target.style.backgroundColor = 'red'
    }
}
let clickPalette = document.getElementById('color-palette')
clickPalette.addEventListener('click', colorSelector)
function colorSelector(event) {
    let previousColor = document.querySelector('.selected')
    previousColor.className = 'color'
    event.target.className = 'color selected'
    console.log(document.getElementsByClassName('selected'))
}