function createPalette (color) {
  let palette = document.createElement('div');
  palette.className = 'color';
  palette.id = color;
  palette.style.backgroundColor = color;
  let divPalette = document.getElementById('color-palette');
  divPalette.appendChild(palette);
}

createPalette('black');
createPalette('red');
createPalette('blue');
createPalette('green');
