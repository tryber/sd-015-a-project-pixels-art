// Criando função para aleatoriedade de cores:
function randomColors() {
  const colorsPaletteArray = ['color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8',
    'color9', 'color10', 'color11', 'color12'];

  const colorsPaletteObject = {
    color2: 'Yellow',
    color3: 'Cyan',
    color4: 'Orangered',
    color5: 'Darkviolet',
    color6: 'Coral',
    color7: 'Dodgerblue',
    color8: 'Deeppink',
    color9: 'Darkslategray',
    color10: 'Lightsalmon',
    color11: 'Tan',
    color12: 'Darkgoldenrod',
  };

  const paletteColorsArray = document.getElementById('color-palette').children; 

  for (let index = 1; index < paletteColorsArray.length; index += 1) {
    const randomId = colorsPaletteArray[Math.floor(Math.random() * colorsPaletteArray.length)]; // https://css-tricks.com/snippets/javascript/select-random-item-array/
    paletteColorsArray[index].id = randomId;
    paletteColorsArray[index].innerText = colorsPaletteObject[randomId];
    const indexOfRandomID = colorsPaletteArray.indexOf(randomId);
    colorsPaletteArray.splice(indexOfRandomID, 1);
  }
}

// Criando função para selecionar cor da paleta:
function selectPaletteColor() {
  const paletteColorsArray = document.getElementById('color-palette').children;

  for (const element of paletteColorsArray) {
    element.addEventListener('click', function () {
      const currentSelectedElement = document.querySelector('.selected');
      currentSelectedElement.classList.remove('selected');
      currentSelectedElement.style.fontSize = '1.5em';
      element.classList.add('selected');
      element.style.fontSize = '2em';
    });
  }
}

// Criando função para pintar os quadrados com a cor selecionada:
function coloring() {
  const pixelsArray = document.getElementById('pixel-board').children;

  for (const pixel of pixelsArray) {
    pixel.addEventListener('click', function () {
      const currentSelectedElement = document.querySelector('.selected');
      pixel.style.backgroundColor = currentSelectedElement.innerText;
    });
  }
}

// Criando função para limpar o quadrados pintados:
function cleanPixels() {
  const getCleanButton = document.getElementById('clear-board');

  getCleanButton.addEventListener('click', function () {
    const pixelsArray = document.getElementById('pixel-board').children;

    for (const pixel of pixelsArray) {
      pixel.style.backgroundColor = 'white';
    }
  });
}

window.onload = function () {
  const blackColorFromPalette = document.querySelector('#color1');
  blackColorFromPalette.classList.add('selected');
  blackColorFromPalette.style.fontSize = '2em';
  randomColors();
  selectPaletteColor();
  coloring();
  cleanPixels();
};
