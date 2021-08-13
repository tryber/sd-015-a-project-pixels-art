const pixelBoard = document.querySelector('#pixel-board');

for (let i = 1; i < 6; i += 1) {
  const line = document.createElement('div');
  pixelBoard.appendChild(line);
  for (let ind = 1; ind < 6; ind += 1) {
    const pixel = document.createElement('div');
    pixel.style.width = '50px';
    pixel.style.height = '50px';
    pixel.style.backgroundColor = 'rgb(255, 255, 255)';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.className = 'pixel';
    line.appendChild(pixel);
  }
}
