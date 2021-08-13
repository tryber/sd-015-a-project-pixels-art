const colors = document.getElementById('color-palette')

// Sets first color to black
window.onload = function firstColorBlack() {
  document.getElementById('black').style.backgroundColor = 'black';
};

//Selects color
colors.addEventListener('click', function(event) {
  let selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
});