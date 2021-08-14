window.onload = function () {
  const selecao = document.getElementsByClassName('color')[0];
  selecao.classList.add('selected');
};
const paletaPixel = document.querySelector('#color-palette');
const qtePixelPaleta = 4;
for (let index = 0; index < qtePixelPaleta; index += 1) {
  const paletadiv = document.createElement('div');
  paletadiv.className = 'color';
  if (index === 0) {
    paletadiv.id = 'Black';   
    paletadiv.style.backgroundColor = 'black';
  }; 
  if (index === 1) {
    paletadiv.id = 'Blue';  
    paletadiv.style.backgroundColor = 'blue';
  };
  if (index === 2) {
    paletadiv.id = 'Yellow';  
    paletadiv.style.backgroundColor = 'yellow';    
  };
  if (index === 3) {
    paletadiv.id = 'red';
    paletadiv.style.backgroundColor = 'red';
  };

  paletadiv.style.border = '1px solid black';
  paletadiv.style.width = '50px';
  paletadiv.style.height = '50px';
  paletaPixel.appendChild(paletadiv); 
};

const pixels = document.querySelector('#pixel-board');
const qtePixel = 25;
for (let index = 0; index < qtePixel; index += 1) {
  const paletadiv = document.createElement('div');
  paletadiv.className = 'pixel';
  paletadiv.style.border = '1px solid';
  paletadiv.style.width = '40px';
  paletadiv.style.height = '40px';
  paletadiv.style.backgroundColor = 'rgb(255,255,255)';
  pixels.appendChild(paletadiv);
};