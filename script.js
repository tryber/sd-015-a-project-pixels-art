const colors = document.getElementById('color-palette');

// Selects color
colors.addEventListener('click', function selectsColor(event) {
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
};

// Sets first color to black and randomizes the rest
window.onload = function setsColor() {
  document.getElementById('black').style.backgroundColor = 'black';
  document.getElementById('second').style.backgroundColor = generateRandomColor();
  document.getElementById('third').style.backgroundColor = generateRandomColor();
  document.getElementById('forth').style.backgroundColor = generateRandomColor();
};
