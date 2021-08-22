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
  let elementoClicado = event.target;


}
let pixelList = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelList.length; index += 1) {
  pixelList[index].addEventListener('click',  pixelPaint);
}
