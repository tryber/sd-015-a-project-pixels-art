const colorList = document.getElementsByClassName('color');
const colorContainer = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

function clearSelected() {
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].classList.remove('selected');
  }
}

// Choose color
colorContainer.addEventListener('click', (color) => {
  clearSelected();
  color.target.classList.add('selected');
});

// Paint pixels
pixelBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const pixel = event;
    const selectedColor = document.getElementsByClassName('selected')[0];
    console.log(selectedColor);
    const color = getComputedStyle(selectedColor).backgroundColor;
    console.log(color);
    pixel.target.style.backgroundColor = color;
  }
}, false);
