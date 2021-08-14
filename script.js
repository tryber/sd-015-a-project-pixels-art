// Define o bloco 1 como selected
const mainBlock = document.getElementById('block-one')
mainBlock.classList.add('selected')

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

// Seleciona cor
  const allColors = document.querySelectorAll('.color')
  for (let index = 0; index < allColors.length; index += 1) {
    let selectedColor = document.querySelectorAll('.color')[index]                 
    selectedColor.addEventListener('click', selectColor)                            
  }

  function selectColor(event) {
    let selected = document.querySelector('.selected') 
    selected.classList.remove('selected') 
    event.target.classList.add('selected')
  }

// Define cor
let definedColor = 'black'

const palette = document.querySelector('#color-palette')
palette.addEventListener('click', defineColor)                              // ao clicar em qq lugar da paleta ele redefine a cor

function defineColor() {
  const selectedColor = document.querySelector('.selected')
  definedColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color')
  console.log('ativou')
}

// Pinta os pixels 
const allPixels = document.querySelectorAll('.pixel')                        // define o tamanho do 'for' abaixo com base no numero de pixels
for (let index = 0; index < allPixels.length; index += 1) {
  let selectedPixel = document.querySelectorAll('.pixel')[index]                 // seleciona pixel desejado
  selectedPixel.addEventListener('click', paintPixel)                            // pinta o pixel desejado
}

function paintPixel(event) {
  event.target.style.backgroundColor = definedColor
}

