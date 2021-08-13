const black = document.querySelector('.color');
black.className = 'color selected';
black.style.backgroundColor = '#000000';

function palletColor() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    if (color[index] === color[1]) {
      color[index].style.backgroundColor = '#FFB703';
    } else if (color[index] === color[2]) {
      color[index].style.backgroundColor = '#219EBC';
    } else if (color[index] === color[3]) {
      color[index].style.backgroundColor = '#90E0EF';
    }
  }
}
palletColor();

const boxPixel = document.getElementById('pixel-board');

for (let i = 1; i <= 25; i += 1) {
  const elementBox = document.createElement('li');
  elementBox.style.backgroundColor = 'white';
  elementBox.classList = 'pixel';
  boxPixel.appendChild(elementBox);
}
