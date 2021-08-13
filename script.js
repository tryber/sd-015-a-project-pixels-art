function selectBlack() {
  const selectFirst = document.getElementById('black');
  selectFirst.classList.add('selected');
}
selectBlack();

const firstColor = document.getElementById('black');
const secondColor = document.getElementById('red');
const thirdColor = document.getElementById('blue');
const fourthColor = document.getElementById('green');

function changeSelected(newColor) {
  const changeColor = document.getElementsByClassName('selected')[0];
  changeColor.classList.remove('selected');
  newColor.target.classList.add('selected');
}

firstColor.addEventListener('click', changeSelected);
secondColor.addEventListener('click', changeSelected);
thirdColor.addEventListener('click', changeSelected);
fourthColor.addEventListener('click', changeSelected);

const pixelBox = document.getElementsByClassName('pixel');

function paintBox(event) {
  const selectColor = document.querySelector('.selected');
  const pColor = window.getComputedStyle(selectColor, null).getPropertyValue('background-color');
  event.target.style.backgroundColor = pColor;
}

function paintSelect() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', paintBox);
  }
}
paintSelect();
