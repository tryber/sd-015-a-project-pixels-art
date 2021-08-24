/*
Ajuda para fazer o Project Pixel Art
Eric Cruz
Mentoria Técnica Baêta
Buscas na internet:
https://www.codigofonte.com.br/codigos/botao-limpar-campos-do-formulario
www.w3schools.com/
https://developer.mozilla.org/pt-BR/
*/

let selected = document.getElementsByClassName('color');
for (let index = 0; index < selected.length; index += 1) {
  selected[index].addEventListener('click', addClass);
}
function addClass(event) {
  let removeSelected = document.querySelector('.selected');
  removeSelected.classList.remove('selected');
  event.target.classList.add('selected');
}
let changePaint = document.getElementsByClassName('paint');
for (let index = 0; index < changePaint.length; index += 1) {
  changePaint[index].addEventListener('click', addClass);
}
function pixelPaint(event) {
  let elementSelected = document.querySelector('.selected');
  let elementColor = window.getComputedStyle(elementSelected).backgroundColor;
  let elementClicked = event.target;
  console.log(elementColor);
  elementClicked.style.backgroundColor = elementColor;
}
let pixelList = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelList.length; index += 1) {
  pixelList[index].addEventListener('click', pixelPaint);
}
