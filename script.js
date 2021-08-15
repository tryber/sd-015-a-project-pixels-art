const sectionPixelBoard = document.getElementById('pixel-board');
const sectionPaletteCollor = document.getElementById('color-palette');
const painelSection = document.getElementById('painel-section');
const newSelector = (qttOfSelector, element, selector, selectorName) => {
  for (let index = 0; index < qttOfSelector; index += 1) {
    if (typeof (element.length) !== 'undefined') {
      element[index].setAttribute(selector, selectorName);
    } else {
      element.setAttribute(selector, selectorName);
    }
  }
};
const newPixel = (location, basePixel) => {
  let base = basePixel;
  if (base < 5) {
    base = 5;
  }
  if (base > 50) {
    base = 50;
  }
  const qttOfPixels = base * base;
  for (let count = 0; count < qttOfPixels; count += 1) {
    location.appendChild(document.createElement('div'));
  }
  const pixelBlock = document.querySelectorAll('#pixel-board div');
  sectionPixelBoard.style.width = `${base * 45}px`;
  newSelector(qttOfPixels, pixelBlock, 'class', 'pixel');
};

const eventGetPaletteclass = (event, location) => {
  location.addEventListener(event, (object) => {
    const eventTrigger = object;
    if (eventTrigger.target.classList.contains('color')) {
      document.querySelector('.selected').classList.remove('selected');
      eventTrigger.target.className = 'color selected';
    }
  });
};
const eventChangePixelColor = (location) => {
  location.addEventListener('click', (object) => {
    const eventTrigger = object;
    if (eventTrigger.target.classList.contains('pixel')) {
      const selectedPixel = eventTrigger.target;
      const selectedPalette = document.querySelector('.selected');
      const selectedColor = window.getComputedStyle(selectedPalette).backgroundColor;
      selectedPixel.style.backgroundColor = selectedColor;
    }
  });
};

const createNewElement = (element, elementContent, location, qttOfElements, selector, selectorName) => {
  for (let index = 0; index < qttOfElements; index += 1) {
    const newElement = document.createElement(element);
    newElement.innerHTML = elementContent;
    if (typeof (location.length) === 'undefined') {
      location.appendChild(newElement);
      newSelector(qttOfElements, location.appendChild(newElement), selector, selectorName);
    } else {
      location[index].appendChild(newElement);
      newSelector(qttOfElements, location[index].appendChild(newElement), selector, selectorName);
    }
  }
};

const resetToDefaultColor = (location) => {
  location.addEventListener('click', () => {
    for (let index = 0; index < sectionPixelBoard.children.length; index += 1) {
      sectionPixelBoard.children[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
};
const eventCheckInputValue = (location, inputLocation) => {
  location.addEventListener('click', () => {
    const boardSizeValue = parseInt(inputLocation.value, 10);
    if (boardSizeValue < 1 || /* boardSizeValue.isNaN */ isNaN(boardSizeValue)) {
      alert('Board inválido!');
    } else {
      newPixel(sectionPixelBoard, inputLocation.value);
    }
  });
};
const generateRandomRgb = () => {
  const red = parseInt(Math.random() * 255, 10);
  const blue = parseInt(Math.random() * 255, 10);
  const green = parseInt(Math.random() * 255, 10);
  return `rgb(${red}, ${blue}, ${green})`;
};

const changePaletteBlockCollor = (block, color = 'none') => {
  const palletBlocks = block;
  const defaultColor = color;
  if (defaultColor === 'none') {
    for (let index = 1; index < palletBlocks.length; index += 1) {
      palletBlocks[index].style.backgroundColor = generateRandomRgb();
    }
  } else {
    console.log(palletBlocks);
    palletBlocks.style.backgroundColor = color;
  }
};

const eventGetInputColorValue = (location) => {
  for (let index = 0; index < location.length; index += 1) {
    location[index].addEventListener('input', () => {
      console.log();
      changePaletteBlockCollor(document.querySelectorAll('.color')[index], location[index].value);
    });
  }
};
// REQ 2 E 3
createNewElement('div', '', sectionPaletteCollor, 4, 'class', 'color');
// REQ 4 E 5
newPixel(sectionPixelBoard, 5);
// REQ 6
const allPaletteBlocks = document.getElementsByClassName('color');
window.onload = () => {
  const firstPaletteBlock = document.querySelector('.color');
  firstPaletteBlock.className = 'color selected';
  changePaletteBlockCollor(allPaletteBlocks);
};
// REQ 7 E 8
eventGetPaletteclass('click', sectionPaletteCollor);
eventChangePixelColor(sectionPixelBoard);
// REQ 9
createNewElement('button', 'Limpar', painelSection, 1, 'id', 'clear-board');
const clearButton = document.getElementById('clear-board');
resetToDefaultColor(clearButton);
// REQ 10
createNewElement('input', '', painelSection, 1, 'id', 'board-size');
const inputBoardSize = document.getElementById('board-size');
createNewElement('button', 'VQV', painelSection, 1, 'id', 'generate-board');
// REQ 11
const buttonGenerateBoard = document.getElementById('generate-board');
eventCheckInputValue(buttonGenerateBoard, inputBoardSize);
// REQ 12
newSelector(1, inputBoardSize, 'type', 'number');
newSelector(1, inputBoardSize, 'min', '1');
newSelector(1, inputBoardSize, 'max', '50');
// BONUS DO BONUS

createNewElement('input', '', allPaletteBlocks, 4, 'type', 'color');
const palletBlocksInputColor = document.querySelectorAll('input[type="color"]');
eventGetInputColorValue(palletBlocksInputColor);
