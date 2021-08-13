let colorPalette = document.getElementById('color-palette');
let colors = colorPalette.children;
let arrayColors = ['grey', 'red', 'yellow', 'orange'];

function backgroundOfColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = arrayColors[i]  
  }
}
backgroundOfColors();