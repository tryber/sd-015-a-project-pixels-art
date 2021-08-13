let r = 0;
let g = 0;
let b = 0;

function criarPaleta() {
  const colorPalette = document.querySelector('#color-palette');
  for(i = 1; i <5; i += 1){
  let colorir = `rgb(${r},${g},${b})`;
  const color = document.createElement('div');
  color.className = 'color'
  color.style.backgroundColor = colorir;
  colorPalette.appendChild(color);
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  }
}

criarPaleta();
