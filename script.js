// requisito 6 adicionando selected ao primeiro elemento
let colocaClasse = document.getElementsByClassName('color')[0];
colocaClasse.classList.add('selected')


// Requisito 07 clicando na cor
const clickColor = document.querySelectorAll('.color');
for (let index = 0; index < clickColor.length; index += 1) {
  clickColor[index].addEventListener('click', targetColor);
}

const selectedColor = document.getElementsByClassName('color');

function removeSelect () {
  for (let index = 0; index < selectedColor.length; index+= 1) {
    selectedColor[index].classList.remove('selected')
  }
}

function targetColor (event) {
  removeSelect();
  event.target.classList.add('selected');
}

// Requisito 8 colorindo as caixas
const setBox = document.querySelectorAll('.pixel');

for (let index = 0; index < setBox.length; index += 1) {
  setBox[index].addEventListener('click', fillBoxPixel);
}

function fillBoxPixel (event) {
  const boxPixel = event.target;
  const selectedColor = document.querySelector('.selected')
  const style = getComputedStyle(selectedColor)
  boxPixel.style.backgroundColor = style.backgroundColor;
}

// Requisito 9 



