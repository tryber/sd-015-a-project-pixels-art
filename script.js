/* eslint-disable*/

const newPalletBlock = (location, qttOfBlocks) => {
  
  for(let count = 0; count < qttOfBlocks; count += 1){
    location.appendChild(document.createElement('div'));
  }
  const palletBlock = document.querySelectorAll('#color-palette div')
  newSelector(4, palletBlock, 'class', 'color')
}

const newPixel = (location, qttOfPixels) => {
  for (let count = 0; count < qttOfPixels; count += 1){
    location.appendChild(document.createElement('div'))
  }
  const pixelBlock = document.querySelectorAll('#pixel-board div');
  newSelector(25, pixelBlock, 'class', 'pixel')
}

const newSelector = (qttOfSelector, element, selector, selectorName) => {
    for (let index = 0; index < qttOfSelector; index += 1) {
      switch (selector) {
        case 'id':
          element[index].setAttribute(selector, selectorName); 
          break;
  
        case 'class':
          element[index].classList.add(selectorName);
          break;
  
        default:
          return 0;
          break;
      } 
    }
}

const sectionPalletCollor = document.getElementById('color-palette');
newPalletBlock(sectionPalletCollor, 4)

const sectionPixelBoard = document.getElementById('pixel-board');
newPixel(sectionPixelBoard, 25);

const palletBlock = document.querySelector('.color');
window.onload = () =>{
  palletBlock.className = 'color selected'
}