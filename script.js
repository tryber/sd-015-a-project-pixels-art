const paletteColorClass = document.querySelector('#color-palette');
const buttonClear = document.querySelector('#clear-board');
const inputNumber = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');

// Requisit 10 and 11 - A input with a button to the user to set the size / check the limit of the board 5 to 50.
// Function 1 - check the input and send the input value, first it deleted the divs.
function checkImput() {
  let input = inputNumber.value;
  if (input < 5 || input > 50 || input === '') {
    window.alert('Board inválido!');
    if (input < 5) {
      input = 5;
    } else if (input > 50) {
      input = 50;
    }
  }
  deleteContainerPixels(input);
}

generateBoard.addEventListener('click', checkImput);

// Requisit 9 - Create a button clear all colors in the board.
function clearPixel() {
  const pixelElement = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelElement.length; index += 1) {
    pixelElement[index].style.background = 'rgb(255,255,255)';
  }
}

buttonClear.addEventListener('click', clearPixel);

// Requisit 7 - Change the class selected when the user click on the color.
function selectedClass(event) {
  const classElement = document.querySelector('.selected');
  classElement.classList.remove('selected');
  event.target.classList.add('selected');
}

paletteColorClass.addEventListener('click', selectedClass);

// Requisit 8 - Painted the div with the color selected. 
function selectedColor(event) {
  const styleElement = document.querySelector('.selected');
  const style = getComputedStyle(styleElement);
  const clickedPixel = event.target;
  clickedPixel.style.background = style.backgroundColor;
}

// Requisit 6 - Difined the class as class Selected.  
function className() {
  const nameClassBlack = document.querySelector('.color');
  nameClassBlack.classList.add('selected');
}
// Requisit 4 - After created the pixels palette that function call this function to create the board with 25 pixels 5 to 5.
function createPixel(number) {
  const numberPixel = number;

  for (let indexLine = 0; indexLine < numberPixel; indexLine += 1) {
    const divPixelBoard = document.querySelector('#pixel-board');
    const divLine = document.createElement('div');
    divLine.className = 'line';
    divPixelBoard.appendChild(divLine);
    for (let index = 0; index < numberPixel; index += 1) {
      const divPixelLine = document.querySelectorAll('.line');
      const divPixel = document.createElement('div');
      divPixel.style.background = 'rgb(255,255,255)';
      divPixel.className = 'pixel';
      divPixelLine[indexLine].appendChild(divPixel);
      divPixel.addEventListener('click', selectedColor);
    }
    className();
  }
}

// Requist 2 - I used the base of the function by this site: https://stackoverflow.com/questions/11162664/generate-color-palette-using-javascript.
// Requist 2 - Function 2  - Create the all Div whit the colors.
function createDiv(r, g, b) {
  const divPallete = document.querySelector('#color-palette');
  const divColors = document.createElement('div');
  divColors.style.background = `rgb(${r},${g},${b})`;
  divColors.className = 'color';
  divPallete.appendChild(divColors);
}

// Requisit 2, 3 and 12 - Function 1  - Difined the fisrt color Black and others Randon RGB Color numbers.
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
  createPixel(5);
}

createColorPalette();

// Requisit 10 - A input with a button to the user to set the size.
// Function 2 - delete all boards and send the input velue to creat the new board.
function deleteContainerPixels(number) {
  const elementsPixels = document.querySelectorAll('.pixel');
  const elementsLine = document.querySelectorAll('.line');
  for (let index1 = 0; index1 < elementsPixels.length; index1 += 1) {
    elementsPixels[index1].parentNode.removeChild(elementsPixels[index1]);
  }
  for (let index = 0; index < elementsLine.length; index += 1) {
    elementsLine[index].parentNode.removeChild(elementsLine[index]);
  }
  createPixel(number);
}
