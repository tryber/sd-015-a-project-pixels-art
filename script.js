let base = 5 
let linhas = base
let board = document.querySelector('#pixel-board')

function criarPixels () {
    for (let i = 0; i < base; i += 1);
    let pixel = base[i];
    let quadrados = document.createElement('div')
    quadrados.className = 'color';
    board.appendChild(quadrados)
}
criarPixels();