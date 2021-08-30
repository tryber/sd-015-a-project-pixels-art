function createBox() {
  const colorArray = ['black', 'purple', 'orange', 'cyan'];
  for (let i = 0; i < colorArray.length; i += 1) {
    const colorDiv = document.createElement('div');
    const colorLi = document.createElement('li');
    const parentElement = document.getElementById('color-palette');

    colorDiv.className = 'color';
    colorDiv.style.backgroundColor = colorArray[i];
    parentElement.appendChild(colorDiv);
    colorDiv.appendChild(colorLi);
  }
}

createBox();
