function createLineDiv() {
  const lineDiv = document.createElement('div');
  lineDiv.className = 'boardLine';
  return lineDiv;
}

function createPixels(columns) {
  const linesCreated = document.getElementsByClassName('boardLine');

  for (let i = 0; i < linesCreated.length; i += 1) {
    const line = linesCreated[i];
    for (let j = 1; j <= columns; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

function createLines(lines) {
  for (let i = 1; i <= lines; i += 1) {
    const lineDiv = createLineDiv();
    const board = document.getElementById('pixel-board');
    board.appendChild(lineDiv);
  }
}

function pixelBoard(lines, columns) {
  createLines(lines);
  createPixels(columns);
}

pixelBoard(5, 5);

function colorPicker(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function addEvent() {
  const colorClass = document.getElementsByClassName('color');
  for (let i = 0; i < colorClass.length; i += 1) {
    const colorElement = colorClass[i];
    colorElement.addEventListener('click', colorPicker);
  }
}

addEvent();
