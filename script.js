function selectColor(event) {
  for (const selected of document.querySelectorAll('.selected')) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

window.onload = function () {
  for (const color of document.querySelectorAll('.color')) {
    color.addEventListener('click', selectColor);
  }
};
