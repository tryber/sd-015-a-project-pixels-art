const colorList = document.getElementsByClassName('color');
const colorContainer = document.getElementById('color-palette');

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
