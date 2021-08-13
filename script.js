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

// Generates random color(rgb)
function generateRandomColor() {
  let r;
  let g;
  let b;

  r = Math.floor(Math.random() * 254);
  g = Math.floor(Math.random() * 254);
  b = Math.floor(Math.random() * 254);

  return `rgb(${r}, ${g}, ${b})`;
}

window.onload = function() {
  document.getElementById('second').style.backgroundColor = generateRandomColor();
  document.getElementById('third').style.backgroundColor = generateRandomColor();
  document.getElementById('forth').style.backgroundColor = generateRandomColor();
};