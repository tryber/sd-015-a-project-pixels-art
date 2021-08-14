window.onload = function() {
  let blackColorFromPalette = document.querySelector('#color1');
  blackColorFromPalette.classList.add('selected');
  randomColors();
  selectPaletteColor();
  coloring();
  cleanPixels();
}

//Criando função para aleatoriedade de cores:
function randomColors() {
  let colorsPaletteArray = ["color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "color10", "color11", "color12"];

  let colorsPaletteObject = {
    color2: "Yellow",
    color3: "Cyan",
    color4: "Orangered",
    color5: "Darkviolet",
    color6: "Coral",
    color7: "Dodgerblue",
    color8: "Deeppink",
    color9: "Darkslategray",
    color10: "Lightsalmon",
    color11: "Tan",
    color12: "Darkgoldenrod"
  };

  let paletteColorsArray = document.getElementById('color-palette').children; 

  for (let index = 1; index < paletteColorsArray.length; index += 1) {
    let randomId = colorsPaletteArray[Math.floor(Math.random()*colorsPaletteArray.length)]; //https://css-tricks.com/snippets/javascript/select-random-item-array/
    paletteColorsArray[index].id = randomId
    paletteColorsArray[index].innerText = colorsPaletteObject[randomId]
  }
}

//Criando função para selecionar cor da paleta:
function selectPaletteColor() {
  let paletteColorsArray = document.getElementById('color-palette').children;

  for (let element of paletteColorsArray) {
    element.addEventListener('click', function() {
      let currentSelectedElement = document.querySelector('.selected');
      currentSelectedElement.classList.remove('selected');
      element.classList.add('selected');
    })
  }
}

//Criando função para pintar os quadrados com a cor selecionada:
function coloring() {
  let pixelsArray = document.getElementById('pixel-board').children;

  for (let pixel of pixelsArray) {
    pixel.addEventListener('click', function() {
      let currentSelectedElement = document.querySelector('.selected');
      pixel.style.backgroundColor = currentSelectedElement.innerText;
    })
  }
}

//Criando função para limpar o quadrados pintados:
function cleanPixels() {
  let getCleanButton = document.getElementById('clear-board');

  getCleanButton.addEventListener('click', function() {
    let pixelsArray = document.getElementById('pixel-board').children;

    for (let pixel of pixelsArray) {
      pixel.style.backgroundColor = 'white';
    }
  })
}