const colorPaletteSection = document.getElementById('color-palette');
const firstColor = colorPaletteSection.firstElementChild;
const secondColor = firstColor.nextElementSibling;
const thirdColor = secondColor.nextElementSibling;
const fourthColor = colorPaletteSection.lastElementChild;
const colorList = document.querySelectorAll('#color-palette div');

function changeBackgroundColor(event, color) {
  const elem = event;
  elem.style.backgroundColor = color;
}

changeBackgroundColor(firstColor, 'black');
changeBackgroundColor(secondColor, 'red');
changeBackgroundColor(thirdColor, 'blue');
changeBackgroundColor(fourthColor, 'green');

for (let i = 0; i < colorList.length; i += 1) {
  colorList[i].style.border = '1px black solid';
  colorList[i].style.display = 'inline-block';
}

function removePreviousSelected() {
  for (let idx = 0; idx < colorList.length; idx += 1) {
    colorList[idx].classList.remove('selected');
  }
}

function selectColor(event) {
  removePreviousSelected();
  event.target.classList.add('selected');
}

colorPaletteSection.addEventListener('click', selectColor);

function paintPixels(event) {
  const elem = event;
  const selectedColor = document.querySelector('.selected');
  const selectedObj = getComputedStyle(selectedColor);
  const selectedObjColor = selectedObj.backgroundColor;
  elem.target.style.backgroundColor = selectedObjColor;
}

const td = document.querySelectorAll('.pixel');

for (let x = 0; x < td.length; x += 1) {
  td[x].addEventListener('click', paintPixels);
}
