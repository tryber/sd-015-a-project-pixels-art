const pixelBoard = document.querySelector('#pixel-board');

for (let i = 1; i <= 25; i += 1) {
  const pixels = document.createElement('div');
  pixels.classList = 'pixel';
  pixelBoard.appendChild(pixels);
}