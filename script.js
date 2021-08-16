const pixelBoard = document.querySelector('#pixel-board');

for (let i = 1; i <= 25; i += 1) {
  const pixels = document.createElement('div');
  pixels.classList = 'pixel';
  pixels.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixels);
}