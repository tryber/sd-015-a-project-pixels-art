document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('green').style.backgroundColor = 'green';
document.getElementById('blue').style.backgroundColor = 'blue';

const color = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');

function selectColor() {
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', (event) => {
      for (let j = 0; j < color.length; j += 1) {
        color[j].classList.remove('selected');
      }
      event.target.classList.add('selected');
      document.querySelector('.selected').style.backgroundColor = color[i].style.backgroundColor;
    });
  }
}

selectColor();

function colorPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', (event) => {
      const activeColor = document.querySelector('.selected');
      const actualPixel = event.target;
      actualPixel.style.backgroundColor = activeColor.style.backgroundColor;
    });
  }
}

colorPixel();
