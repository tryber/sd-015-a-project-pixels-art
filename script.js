let cores = ['black', 'blue', 'green', 'purple'];

for (index = 0; index < cores.length; index += 1) {
  let motherPalette = document.createElement('div');
  let divPalette = document.querySelector('#color-palette').appendChild(motherPalette);

  divPalette.className = 'color';
  divPalette.style.backgroundColor = cores[index];
  // divPalette.innerHTML = cores[index];
  
  if (cores[index] === 'black'){
    divPalette.classList.add('selected')
  }
  
}

let colorSelection = document.querySelector('#color-palette')
colorSelection.addEventListener('click', changeSelected)

function changeSelected (div) {
  let listaDeDivs = document.getElementsByClassName('color')
  // console.log(listaDeDivs)

  for (let idx2 = 0; idx2 < listaDeDivs.length; idx2 +=1){

    listaDeDivs[idx2].classList.remove('selected')
  }
  
  div.target.classList.add('selected')
  

  console.log(colorSelection)
}


for (idx = 0; idx < 5; idx += 1) {
  let motherPixel = document.createElement('div');
  let eachPixel = document
    .querySelector('#pixel-board')
    .appendChild(motherPixel);
  eachPixel.innerHTML = '';
  eachPixel.className = 'pixel';
  eachPixel.style.backgroundColor = 'white';

  for (idx2 = 0; idx2 < 4; idx2 += 1) {
    let motherPixel2 = document.createElement('div');
    let eachPixel2 = document
      .querySelector('#pixel-board')
      .appendChild(motherPixel2);
    eachPixel2.innerHTML = '';
    eachPixel2.className = 'pixel';
    eachPixel2.style.backgroundColor = 'white';
  }
}

let quadro = document.querySelector('#pixel-board')

quadro.addEventListener('click', colorir)

function colorir (quadrado) {
   quadrado.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor

  }
  
let botao = document.querySelector('#clear-board')
let motherBoard = document.querySelector('#pixel-board').children
botao.addEventListener('click', limpador)

function limpador (){
  for (let idx3 = 0; idx3 < motherBoard.length; idx3 += 1 ) {
    motherBoard[idx3].style.backgroundColor = 'white'
  }
}
