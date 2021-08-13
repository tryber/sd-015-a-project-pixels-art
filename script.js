// código das cores em HEX
const colorPalette = {
  color0: '#000000', // black
  color1: '#FF0000', // red
  color2: '#00FF00', // green
  color3: '#0000FF'
}
let paletteSize = Object.keys(colorPalette).length;
// Object.getOwnPropertyNames(colorPalette[i])
const paletteUl = document.querySelector('#color-palette ul');
for (let i=0; i < paletteSize; i += 1){
  let colors = document.createElement('li');
  let currentKey = Object.keys(colorPalette)[i];
  colors.className = 'color';
  colors.id = currentKey;
  colors.style.backgroundColor = colorPalette[currentKey];
  paletteUl.appendChild(colors);
}