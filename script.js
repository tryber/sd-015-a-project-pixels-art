window.onload = function() {
  const classSelect = 'color selected'

  const firstColorBlack = document.querySelector('#black');
  firstColorBlack.className = classSelect;
}


function selectColor() {
  const colors = document.getElementById('color-palette')
  colors.addEventListener('click', function(event) {
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



selectColor()
