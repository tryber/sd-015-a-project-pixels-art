window.onload = function() {
  let blackColorFromPalette = document.querySelector('#black');
  blackColorFromPalette.classList.add('selected');
  selectPaletteColor()
  coloring()
  cleanPixels()
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
      let currentSelectedElement = document.querySelector('.selected')
      console.log(currentSelectedElement.id)
      pixel.style.backgroundColor = currentSelectedElement.id
    })
  }
}

//Criando função para limpar o quadrados pintados:
function cleanPixels() {
  let getCleanButton = document.getElementById('clear-board')

  getCleanButton.addEventListener('click', function() {
    let pixelsArray = document.getElementById('pixel-board').children;

    for (let pixel of pixelsArray) {
      pixel.style.backgroundColor = 'white'
    }
  })
}