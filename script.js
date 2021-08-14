// Requisito 3
function firstBlock() {
  const mainBlock = document.getElementsByClassName('color')[0]
  mainBlock.id = 'main-block'
  mainBlock.classList.add('selected')
}
firstBlock();

// Cria tabela de pixels
function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 6; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBoard.appendChild(pixelColumn);
    for (let index2 = 1; index2 < 6; index2 += 1) {
      const pixelLine = document.createElement('div');
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}
createTable();

// Escolhe cor
const palette = document.querySelector('#color-palette')
palette.addEventListener('click', selectColor)

function selectColor(event) {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected')
  event.target.classList.add('selected')
}