window.onload = function () {
  createPixelBoard(5, 5);
  document.getElementById('black').classList.add('selected');
  addListeners('.color', 'click', selectColor);
};

// O Código de criação da Pixel Board foi baseado no código da dinâmica do fim do bloco 5

function createPixelBoard(height, width) {
  createLines(height);
  let lines = document.querySelectorAll('.line');
  createColumns(lines, width);
}

function createLines(height) {
  for (let i = 0; i < height; i += 1) {
    let pb = document.getElementById('pixel-board');
    let line = document.createElement('div');
    line.className = 'line';
    pb.appendChild(line);
  }
}

function createColumns(lines, width) {
  for (let index = 0; index < lines.length; index += 1) {
    createPixels(lines[index], width);
  }
}

function createPixels(pixLine, width) {
  for (let lineColumn = 1; lineColumn <= width; lineColumn += 1) {
    let box = document.createElement('div');
    box.className = 'pixel';
    pixLine.appendChild(box);
  }
}

function addListeners(targetElement, targetEvent, targetFunction) {
  let elementArray = document.querySelectorAll(targetElement);
  for (let i = 0; i < elementArray.length; i += 1) {
    document
      .querySelectorAll(targetElement)
      [i].addEventListener(targetEvent, targetFunction);
  }
}

// Selected Color

function selectColor(color) {
  let colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  color.target.classList.add('selected');
  console.log(color.target);
}
