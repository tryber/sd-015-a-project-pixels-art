//O Código de criação da Pixel Board foi baseado no código da dinâmica do fim do bloco 5

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

createPixelBoard(5, 5);
