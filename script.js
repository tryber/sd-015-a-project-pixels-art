window.onload = function() {
  let blackColorFromPalette = document.querySelector('#color1');
  blackColorFromPalette.classList.add('selected');
  selectPaletteColor()
}

//Criando função para selecionar cor da paleta:
function selectPaletteColor() {
  let paletteColorsArray = document.getElementById('color-palette').children;

  for (let element of paletteColorsArray) {
    element.addEventListener('click', function() {
      let currentSelectedElement = document.querySelector('.selected');
      currentSelectedElement.classList.remove('selected');
      element.classList.add('selected');
      console.log(element);
    })
  }
}

