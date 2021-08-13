function divColor() {
  let color = ['black', 'red', 'blue', 'yellow'];

  for (let index in color) {
    let newColor = color[index];
    let newDivColor = document.createElement('div');
    newDivColor.className = "color"

    newDivColor.style.backgroundColor = newColor;
    document.querySelector('#color-palette').appendChild(newDivColor);
  }
}

divColor()