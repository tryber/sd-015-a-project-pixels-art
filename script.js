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
