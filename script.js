const tabelaPixelArt = 'pixel-board';
let numeroGrade = 25;

// Função que cria a Paleta de Cores e aleatoriza as Cores
function criaPaleta(parent, color) {
  const colorDiv = document.createElement('div');
  const colorItem = document.createElement('li');
  const parentElement = document.getElementById(parent);

  colorDiv.className = 'color';
  colorItem.style.backgroundColor = color;
  parentElement.appendChild(colorDiv);
  colorDiv.appendChild(colorItem);
}

function criaCoresPaleta(parent) {
  criaPaleta(parent, 'black');
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    criaPaleta(parent, `rgb(${r}, ${g}, ${b})`);
  }
}

criaPaleta();
criaCoresPaleta('color-palette');

// Funções responsáveis pela criação dos elementos da tabela
function criaPixel(parent, value) {
  for (let i = 0; i < value; i += 1) {
    const pixelDiv = document.createElement('div');
    const pixelItem = document.createElement('li');
    const parentElement = document.getElementById(parent);

    pixelDiv.className = 'pixel';
    pixelDiv.style.backgroundColor = 'white';
    parentElement.appendChild(pixelDiv);
    pixelDiv.appendChild(pixelItem);
  }
}

function removePixel(value) {
  for (let i = 0; i < value; i += 1) {
    const selectAllPixel = document.getElementsByClassName('pixel');

    selectAllPixel[0].remove();
  }
}

criaPixel();
removePixel();
