const black = document.querySelector('.color');
black.className = 'color selected';
black.style.backgroundColor = '#000000';
let allColors = document.querySelectorAll('.color');
const paletteColor = document.querySelector('#color-palette');

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
function creatPixelBox() {
  for (let i = 1; i <= 25; i += 1) {
    const elementBox = document.createElement('li');
    elementBox.style.backgroundColor = 'white';
    elementBox.classList = 'pixel';
    boxPixel.appendChild(elementBox);
  }
}
creatPixelBox();

function selectedColor() {
  for (let index = 0; index < allColors.length; index += 1) {
    allColors[index].addEventListener('click', function eventClick() {
      if (allColors[index].className === 'color selected') {
        allColors[index].className = 'color';
      } else if (allColors[index].className === 'color') {
        allColors[index].className = 'color selected';
      }
    });
  }
}
selectedColor();

//7
//Codigo utilizado da PR de Emily Nilsen Carvalho - Turma 15 Tribo A
function alvoCor(event) {
  removeSelected();
  event.target.classList.add('selected');
}

const clicaNaCor = document.querySelectorAll('.color');
for (let i = 0; i < clicaNaCor.length; i += 1) {
  clicaNaCor[i].addEventListener('click', alvoCor);
}

const selecionarCor = document.getElementsByClassName('color');

function removeSelected() {
  for (let i = 0; i < selecionarCor.length; i += 1) {
    selecionarCor[i].classList.remove('selected');
  }
}
//Codigo utilizado da PR de Emily Nilsen Carvalho - Turma 15 Tribo A
