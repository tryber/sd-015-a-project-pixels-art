const tabelaPixelArt = 'pixel-board';
let numeroGrade = 25;

// Função que cria a Paleta de Cores e aleatoriza as Cores
function criaPaleta(parent, color) {
  const colorDiv = document.createElement('div');
  const colorItem = document.createElement('li');
  const parentElement = document.getElementById(parent);

  colorDiv.className = 'color';
  colorItem.style.backgroundColor = color;
  parentElement.appendChild(colorDiv);
  colorDiv.appendChild(colorItem);
}

function criaCoresPaleta(parent) {
  criaPaleta(parent, 'black');
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    criaPaleta(parent, `rgb(${r}, ${g}, ${b})`);
  }
}

criaPaleta();
criaCoresPaleta('color-palette');
