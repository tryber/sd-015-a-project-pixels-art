function createPixelsBoard() {
  let numberOfElements = 25;
  for (let i = 1; i <= numberOfElements; i +=1) {
    let boardDiv = document.getElementById('pixel-board');
    let elementsDiv = document.createElement('div');
    elementsDiv.className = 'pixel';
    boardDiv.appendChild(elementsDiv);
  }
}

createPixelsBoard();