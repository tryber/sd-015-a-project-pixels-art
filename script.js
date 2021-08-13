const color = document.getElementsByClassName('color');

function selectedColor() {
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

selectedColor();
