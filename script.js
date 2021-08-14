function randomNumberGenerator() {
  const randomNumber = Math.floor(Math.random() * 255 + 1);
  return randomNumber;
}

const arrayOfColors = document.querySelectorAll('.color');
arrayOfColors[0].style.backgroundColor = 'black';
arrayOfColors[0].className += ' selected';
arrayOfColors[1].style.backgroundColor = 'rgb(' + randomNumberGenerator() + ', ' + randomNumberGenerator() + ', ' + randomNumberGenerator() + ')';
arrayOfColors[2].style.backgroundColor = 'rgb(' + randomNumberGenerator() + ', ' + randomNumberGenerator() + ', ' + randomNumberGenerator() + ')';
arrayOfColors[3].style.backgroundColor = 'rgb(' + randomNumberGenerator() + ', ' + randomNumberGenerator() + ', ' + randomNumberGenerator() + ')';

for (let index = 0; index < 25; index += 1) {
  const box = document.createElement('div');
  box.className = 'pixel';
  box.style.width = '40px';
  box.style.height = '40px';
  box.style.display = 'inline-block';
  box.style.border = 'solid 1px black';
  box.style.backgroundColor = 'white';
  box.style.boxSizing = 'border-box';
  document.querySelector('#pixel-board').appendChild(box);
}

for (let superIndex = 0; superIndex < arrayOfColors.length; superIndex += 1) {
  const colorOfChoice = arrayOfColors[superIndex];
  colorOfChoice.addEventListener('click', () => {
    colorOfChoice.className += ' selected';
    for (let hyperIndex = 0; hyperIndex < arrayOfColors.length; hyperIndex += 1) {
      if (hyperIndex !== superIndex) {
        arrayOfColors[hyperIndex].className = 'color';

      }
    }
  })
}

function clickingBox(size) {
  const maxIndex = size * size;
  for (let megaIndex = 0; megaIndex < maxIndex; megaIndex += 1) {
    const boxToBeFilled = document.querySelectorAll('.pixel')[megaIndex];
    boxToBeFilled.addEventListener('click', () => {
      boxToBeFilled.style.backgroundColor = document.querySelector('.color.selected').style.backgroundColor;
    })
  }
}

clickingBox(5);

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', () => {
  const arrayOfBoxes = document.querySelectorAll('.pixel');
  for (let coolIndex = 0; coolIndex < arrayOfBoxes.length; coolIndex += 1) {
    arrayOfBoxes[coolIndex].style.backgroundColor = 'white';
  }
})

const generateBoardButton = document.querySelector('#generate-board');
const inputSize = document.querySelector('#board-size');
  
function setBoard() {
  if (inputSize.value.length === 0) {
    alert('Board inválido!');

  }
  else {
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';

    if (inputSize.value < 5) {
      inputSize.value = 5;
    }
    if (inputSize.value > 50) {
      inputSize.value = 50;
    }
    for (let premiumIndex = 0; premiumIndex < inputSize.value * inputSize.value; premiumIndex += 1) {
      const box = document.createElement('div');
      box.className = 'pixel';
      box.style.width = '40px';
      box.style.height = '40px';
      box.style.display = 'inline-block';
      box.style.border = 'solid 1px black';
      box.style.backgroundColor = 'white';
      box.style.boxSizing = 'border-box';
      document.querySelector('#pixel-board').appendChild(box);
    }
    pixelBoard.style.maxWidth = inputSize.value * 40 + 'px';
    pixelBoard.style.maxHeight = inputSize.value * 40 + 'px';
    clickingBox(inputSize.value);
  }
}
generateBoardButton.addEventListener('click', setBoard);