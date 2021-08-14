function createPixelBoard(n) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < n; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);
    for (let fillLine = 0; fillLine < n; fillLine += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}
createPixelBoard(5);
//Function create Pixel Board:
//a sequência de ação de um for dentro de outro é simultaneamente, neste caso, preencher
//vertical ehorizontalmente com pixels até n-1 unidades.
window.onload = function () {
  let addClassName = document.getElementById('black');
  addClassName.classList.add('selected');
};
