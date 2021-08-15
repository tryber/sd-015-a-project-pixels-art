function selectColor(event) {
  for (const selected of document.querySelectorAll('.selected')) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function changeColor(event) {
  const color = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  event.target.style.background = color;
}

window.onload = function () {
  for (const color of document.querySelectorAll('.color')) {
    color.addEventListener('click', selectColor);
  }
  for (const pixel of document.querySelectorAll('.pixel')) {
    pixel.addEventListener('click', changeColor);
  }
};
