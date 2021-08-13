// função para criar div com id e nome da cor
function createElementColor(color) {
  const pallete = document.getElementById('color-palet');
  const colorCreated = document.createElement('div');
  colorCreated.className = 'color';
  colorCreated.id = color;
  colorCreated.style.backgroundColor = color;
  pallete.appendChild(colorCreated);
}

// cores escolhidas para a paleta de cores
const myColors = ['red', 'blue', 'green', 'black'];
// aplicando fução de criar cores
myColors.forEach(createElementColor);
