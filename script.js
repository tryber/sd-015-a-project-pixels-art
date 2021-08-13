//  Gerando cores aleatorias
function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

//  Gerando a palleta de cor
function generateColorPallete() {
  const parent = document.getElementById('color-palette');
  for (let c = 0; c < 4; c += 1) {
    const div = document.createElement('div');
    if (c === 0) {
      div.className = 'color selected';
      div.style.backgroundColor = 'black';
      parent.appendChild(div);
    } else {
      div.className = 'color';
      div.style.backgroundColor = gerarCorAleatoria();
      parent.appendChild(div);
    }
  }
}
generateColorPallete();

//  Gerando o pixel-bord
function generatePixelBoard(size) {
  const parent = document.getElementById('pixel-board');
  for (let c = 0; c < size; c += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    parent.appendChild(div);
  }
}
generatePixelBoard(25);

function escolhendoCor() {
  const parent = document.querySelector('#color-palette');
  parent.addEventListener('click', (e) => {
    const cores = document.getElementsByClassName('color');
    for (let c = 0; c < cores.length; c += 1) {
      cores[c].className = 'color';
    }
    e.target.className = 'color selected';
  });
}
escolhendoCor();

//  Colorir a paleta
function colorir() {
  const pixels = document.getElementById('pixel-board');
  pixels.addEventListener('click', (e) => {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
}
colorir();

//  clear box
function clear() {
  const button = document.getElementById('clear-board');
  const pixels = document.getElementsByClassName('pixel');
  button.addEventListener('click', (_) => {
    for (let c = 0; c < pixels.length; c += 1) {
      pixels[c].style.backgroundColor = 'white';
    }
  });
}
clear();

function valueValidator(value) {
  let result = value;
  if (value < 5) {
    result = 5;
  }
  if (value > 50) {
    result = 50;
  }
  return result;
}

//  mudar Tamanho
function changeSize() {
  const button = document.querySelector('#generate-board');
  button.addEventListener('click', (_) => {
    const input = document.querySelector('#board-size').value;
    if (input === '') {
      alert('Board inválido!');
    } else {
      const result = valueValidator(input);
      const board = document.querySelector('#pixel-board');
      board.innerHTML = '';
      board.style.gridTemplateColumns = `repeat(${result}, 1fr)`;
      board.style.gridTemplateRows = `repeat(${result}, 1fr)`;
      generatePixelBoard(result * result);
    }
  });
}
changeSize();
