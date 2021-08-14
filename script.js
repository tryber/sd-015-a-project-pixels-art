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

function selecionado() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', () => {
      color[i].classList.toggle('selected');
    });
  }
}
selecionado();
PixelBoardBox();
