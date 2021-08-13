// Requisito 2 -Adicione à página uma paleta de quatro cores distintas. E Requisito 3 - Adicione a cor preta como a primeira cor da paleta de cores.
// Cria elemento Paleta de Cores com id color-palette
function createColorPalette() {
  let colorPalette = document.createElement('div');
  let getSection = document.querySelector('#section-colors');
  colorPalette.id = 'color-palette';
  getSection.appendChild(colorPalette);
};
createColorPalette();

// Cria classe color para cada cor individual da paleta de cores
function createClassColor() {
  for (let index = 1; index <= 4; index += 1) {
    let getColor = document.getElementById('color-palette');
    let newColor = document.createElement('div');
    getColor.appendChild(newColor);
    newColor.className = 'color';
  }
};
createClassColor();

// Adicionando cor de fundo à cada elemento da paleta. RESOLVE TAMBÈM REQUISITO 3 (Que pede que a primeira cor da paleta de cores seja PRETA).
function addBackgroundColor(backgroundColors) {
  
  let getClassColor = document.getElementsByClassName('color');
  for (let index = 0; index < getClassColor.length; index += 1) {
    getClassColor[index].style.backgroundColor = background[index];
  }
};
let background = ['black', 'red', 'blue', 'green'];
addBackgroundColor(background);

// Requisito 4 - Adicione à página um quadro de pixels, com 25 pixels.
function createFramePixels() {
  let newSection = document.createElement('section');
  newSection.id = 'pixel-board';
  principal.appendChild(newSection);
  for (let index = 1; index <= 5; index += 1) {
    let array = index;
    let newColumn = document.createElement('div');
    newColumn.className = 'columns'
    newSection.appendChild(newColumn);
    for (let index2 = 1; index2 <= 5; index2 += 1) {
      let createPixels = document.createElement('div');
      createPixels.className = 'pixel';
      newColumn.appendChild(createPixels);
    }
  }
}
createFramePixels();
