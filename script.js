// requisito 6 adicionando selected ao primeiro elemento
let colocaClasse = document.getElementsByClassName('color')[0];
colocaClasse.classList.add('selected')


// Requisito 07 clicando na cor
const clickColor = document.querySelectorAll('.color');
for(let index of clickColor) {
  
}

const selectedColor = document.getElementsByClassName('color');

function removeSelect () {
  for (let index = 0; index < selectedColor.length; index+= 1) {
    selectedColor[index].classList.remove('selected')
  }
}

function targetColor () {
  removeSelect();
  event.target.classList.add('selected');

}
clickColor.addEventListener('click', targetColor)