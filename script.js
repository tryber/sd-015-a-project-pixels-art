/* eslint-disable*/

const newPixel = (location, basePixel) => {
  basePixel < 5 ? basePixel = 5: basePixel;
  basePixel > 50 ? basePixel = 50: basePixel;
  let qttOfPixels = basePixel * basePixel;
  for (let count = 0; count < qttOfPixels; count += 1){
    location.appendChild(document.createElement('div'))
  }
  const pixelBlock = document.querySelectorAll('#pixel-board div');
  sectionPixelBoard.style.width = (basePixel * 45) + 'px'; 
  newSelector(qttOfPixels, pixelBlock, 'class', 'pixel')
}

const newSelector = (qttOfSelector, element, selector, selectorName) => {
  for (let index = 0; index < qttOfSelector; index += 1) {
    if(typeof (element.length) !== 'undefined' ){
      element[index].setAttribute(selector, selectorName)
    }else{
      element.setAttribute(selector, selectorName)
    }
      // typeof (element.length) !== 'undefined' ? element[index].setAttribute(selector, selectorName) : element.setAttribute(selector, selectorName);
    } 
}
const eventGetPaletteclass = (event, location) =>{
  location.addEventListener(event, (eventTrigger) => {

    if(eventTrigger.target.classList.contains('color')){
      if(!eventTrigger.target.classList.contains('selected')){
        document.querySelector('.selected').classList.remove('selected');
        eventTrigger.target.className = 'color selected';
      }
    }
  })
}
const eventChangePixelColor = (location) => {
  location.addEventListener('click', (event) => {
    if(event.target.classList.contains('pixel') ){
      const selectedPixel = event.target;
      const selectedPalette = document.querySelector('.selected');
      const selectedColor = window.getComputedStyle(selectedPalette).backgroundColor;
      selectedPixel.style.backgroundColor = selectedColor;
    }
  })
}

const createNewElement = (element, elementContent, location, qttOfElements, selector, selectorName) =>{
  for(let index = 0; index < qttOfElements; index += 1){
    const newElement = document.createElement(element);
    newElement.innerHTML = elementContent;
    location.appendChild(newElement); 
    newSelector(qttOfElements, location.appendChild(newElement), selector, selectorName);
  }
}
const pixelBoardDefaultColor = () =>{
  location.reload()
  return false;
}
const resetToDefaultColor = (location) =>{
  location.addEventListener('click', pixelBoardDefaultColor)
} 
const eventCheckInputValue = (location, inputLocation)  => {
  location.addEventListener('click', () =>{
    let boardSizeValue = parseInt(inputLocation.value)
    if (boardSizeValue < 1 ||  isNaN(boardSizeValue)){
      alert("Board inválido!")
    }else{
      newPixel(sectionPixelBoard, inputLocation.value)
    }
  })
}

const changePaletteBlockCollor = (palletBlocks) => {
  for (let index = 1;  index < palletBlocks.length; index += 1){
    palletBlocks[index].style.backgroundColor = generateRandomRgb();
  }
}

const generateRandomRgb = () => {
  let red = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  return 'rgb('+ red + ', ' + blue + ', ' + green + ')'; 
}
window.onload = () =>{
  firstPaletteBlock.className = 'color selected';
  changePaletteBlockCollor(allPaletteBlocks)  
}

const sectionPaletteCollor = document.getElementById('color-palette');
createNewElement('div', '', sectionPaletteCollor, 4, 'class', 'color')

const sectionPixelBoard = document.getElementById('pixel-board');
newPixel(sectionPixelBoard, 5);

const firstPaletteBlock = document.querySelector('.color');
const allPaletteBlocks = document.getElementsByClassName('color');

eventGetPaletteclass('click', sectionPaletteCollor)
eventChangePixelColor(sectionPixelBoard)
const divButton = document.getElementById('button')
createNewElement('button', 'Limpar', divButton, 1, 'id', 'clear-board')
createNewElement('input', '', divButton, 1, 'id', 'board-size')
createNewElement('button', 'VQV', divButton, 1, 'id', 'generate-board')
const inputBoardSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');
newSelector(1, inputBoardSize, 'type', 'number')
newSelector(1, inputBoardSize, 'min', '1')
newSelector(1, inputBoardSize, 'max', '50')
const clearButton = document.getElementById('clear-board');
resetToDefaultColor(clearButton,)
eventCheckInputValue(buttonGenerateBoard, inputBoardSize)