window.onload = function () {
  const classSelect = 'color selected'

  const firstColorBlack = document.querySelector('#black');
  firstColorBlack.className = classSelect;
}


function selectColor() {
  const colors = document.getElementById('color-palette')
  colors.addEventListener('click', function (event) {
    const selectColor = 'color selected';
    const unselectColors = 'color';
    const colorsPath = document.querySelector('#color-palette');

    for (let i = 0; i < colorsPath.children.length; i += 1) {
      let currentColor = colorsPath.children[i];
      currentColor.className = unselectColors;
    }
    event.target.className = selectColor;
  })
}

function pixelColorFill() {
  const pixelBoxes = document.getElementById('pixel-board');
  pixelBoxes.addEventListener('click', function (event) {
    const colorToFill = document.getElementsByClassName('color selected')[0].id;
    event.target.style.backgroundColor = colorToFill;
  })
}

function resetButton() {
  const buttonPath = document.querySelector('#clear-board');

  buttonPath.addEventListener('click', function() {
      const boxes = document.querySelectorAll('.pixel');

      for (let i = 0; i < boxes.length; i += 1) {
        let white = boxes[i];
        white.style.backgroundColor = 'white'
      }
    })
  }

  resetButton()
  pixelColorFill()
  selectColor()
