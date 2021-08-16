const linhaLousa = 5;
const colunaLousa = 5;

function createLousa(element, desiredClass, father) { 
  let box = document.createElement(element);
  document.getElementById(father).appendChild(box);  
  box.className = desiredClass;
}

/* function preencheLousa() {
  for (let preencheColuna = 0; preencheColuna < colunaLousa; preencheColuna += 1)
} */
function giveClass(element, desiredClass) {
  element.className = desiredClass;
}

/* createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('br', 'firstPixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('br', 'firstPixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel');
createLousa('div', 'pixelScreen', 'lousaPixel'); */




 for (let preencheColuna = 0; preencheColuna < colunaLousa; preencheColuna += 1) {
   

  for (let preencheLinha = 1; preencheLinha <= linhaLousa; preencheLinha += 1) {
    createLousa('div', 'pixel', 'pixel-board'); 
  }
  createLousa('br', 'firstPixelScreen', 'pixel-board');
}  
