// Base da Função utilizada do site https://stackoverflow.com/questions/11162664/generate-color-palette-using-javascript.

// Para atender o Requisito 02 foram usadas duas funções, a createDiv fica responsável para criar divs onde serão armazenasdas as paletas de cores.
function createDiv(r, g, b) {
  const divPallete = document.querySelector('#color-palette');
  const divColors = document.createElement('div');
  divColors.style.background = `rgb(${r},${g},${b})`;
  divColors.className = 'color';
  divPallete.appendChild(divColors);
}
// A função creatColorPalette vai criar de forma randomica as cores da minha paleta tendo como condição 1 que a primeira cor seja preta.

function createColorPalette() {
  const numbOfDivs = 4;
  let r = 0;
  let g = 0;
  let b = 0;
  for (let index = 1; index < numbOfDivs; index += 1) {
    if (r === 0 && g === 0 && b === 0) {
      createDiv(r, g, b);
      b = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      r = Math.floor(Math.random() * 255);
    }
    createDiv(r, g, b);

    b = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    r = Math.floor(Math.random() * 255);
  }
}

window.onload = createColorPalette();
