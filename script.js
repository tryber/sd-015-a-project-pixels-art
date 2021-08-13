function pixelBox() {
  const pixBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pix = document.createElement('div');
    pix.className = 'pixel';
    pixBoard.appendChild(pix);
  }
}

function PixelBoardBox() {
  for (let index = 0; index < 5; index += 1) {
    pixelBox();
  }
}

PixelBoardBox();
