addPixelsLines();


function addPixelsLines(number = 5) {
  for (let zendex = 0; zendex < number; zendex += 1) {
    const divPixel = document.createElement('div');
    divPixel.className = 'pixel-lines';

    const board = document.querySelector('#pixel-board');
    board.appendChild(divPixel);
  }

  const pixelLines = document.getElementsByClassName('pixel-lines');

  for (let index = 0; index < pixelLines.length; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLines[index].appendChild(pixel);
    }
  }
}

// 7
//Criado com base no raciocínio de Maria Gabriela

const paletteColors = document.getElementById('color-palette');

function selectedColorPalette() {
  paletteColors.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.id !== paletteColors) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  })
}
selectedColorPalette();

// 8

const boardPixel = document.getElementById('pixel-board');
boardPixel.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const colorCurrent = document.querySelector('.selected').id;
    const colorSelected = event.target;
    colorSelected.style.backgroundColor = colorCurrent;
  }
})


// 9
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixels);

function clearPixels() {
  const white = document.querySelectorAll('.pixel');
  white.forEach(function(currentValue)
  {
     currentValue.style.backgroundColor = "white";
  });

}


//10
function generator() {
  const generateBoard = document.querySelector('#board-size')
  const valor = generateBoard.value

  if (!valor) {
    alert("Board inválido!")
  }
  addPixelsLines();
}
const botao = document.querySelector('#generate-board');
botao.addEventListener('click', generator);

//Raciocinio 10

function createBoard(size) {
  const BOard = document.querySelector('#pixel-board');
  for (let index = 0; index < size; index += 1) {
    const line = document.createElement('div');
    line.style.height = '40px';
    BOard.appendChild(line);
    for (let i = 0; i < size; i += 1) {
      const li = document.createElement('div');
      li.classList.add('pixel');
      line.appendChild(li);
    }
  }
}


function deleteBoard() {
  const pixel2 = document.getElementsByClassName('pixel');
  while (pixel2.length > 0) {
    for (let index = 0; index < pixel2.length; index += 1) {
      const pix = pixel2[index];
      const Father = pix.parentElement;
      Father.parentElement.removeChild(Father);
    }
  }
}

function boardSize() {
  const input = document.querySelector('#board-size').value;
  if (input === '') {
    alert('Board inválido!');
  } else if (input < 5) {
    deleteBoard();
    createBoard(5);
  } else if (input > 50) {
    deleteBoard();
    createBoard(50);
  } else {
    deleteBoard();
    createBoard(input);
  }
  console.log(input);
}
botao.addEventListener('click', boardSize);

//11


//12
// Utiliza-se o Math.random, porém não sei como montar a sintaxe. Uma ideia é fazer 
// como as cores virassem arrays com o valor de 0 à 1, ou seja, red:[0,1] blue:[0,2] green[0,3]

// paletteColors = {



// function aleatoryPixels (red, blue, green){
//     red = Math.random();
//     blue = Math.random();1
//     green = Math.random();

//     paletteColors.addEventListener ('click', )
// }
