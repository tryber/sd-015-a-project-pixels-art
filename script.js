// função para criar div com id e nome da cor
function createElementColor(color) {
  const pallete = document.getElementById('color-palette');
  const colorCreated = document.createElement('div');
  colorCreated.className = 'color';
  colorCreated.id = color;
  colorCreated.style.backgroundColor = color;
  pallete.appendChild(colorCreated);
}

// cores escolhidas para a paleta de cores
const myColors = ['black', 'red', 'blue', 'green'];
// aplicando fução de criar cores
myColors.forEach(createElementColor);
