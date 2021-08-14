function createPixelBoard(n) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let line = 0; line < n; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    pixelBoard.appendChild(pixelLine);
    for (let column = 0; column < n; column += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
  }
}
createPixelBoard(5);
