const colorPalette = document.querySelectorAll('.color');

function selectBlackColor() {
  colorPalette[0].className = 'color selected';
  colorPalette[1].className = 'color';
  colorPalette[2].className = 'color';
  colorPalette[3].className = 'color';
}

function selectSecondColor() {
  colorPalette[1].className += ' selected';
  colorPalette[0].className = 'color';
  colorPalette[2].className = 'color';
  colorPalette[3].className = 'color';
}

function selectThirdColor() {
  colorPalette[2].className += ' selected';
  colorPalette[0].className = 'color';
  colorPalette[1].className = 'color';
  colorPalette[3].className = 'color';
}

function selectFourthColor() {
  colorPalette[3].className += ' selected';
  colorPalette[0].className = 'color';
  colorPalette[1].className = 'color';
  colorPalette[2].className = 'color';
}

colorPalette[0].addEventListener('click', selectBlackColor);
colorPalette[1].addEventListener('click', selectSecondColor);
colorPalette[2].addEventListener('click', selectThirdColor);
colorPalette[3].addEventListener('click', selectFourthColor);
