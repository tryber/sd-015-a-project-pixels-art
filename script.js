window.onload = function () {

  const pixelBoard = document.querySelector("#pixel-board");

  function createColorPalette () {
    const colorPaletteSection = document.querySelector('#color-palette');
    for (let indexColorPalette = 1; indexColorPalette < 5; indexColorPalette += 1) {
      let colorPaletteDiv = document.createElement('div');
      colorPaletteDiv.className = 'color';
      colorPaletteDiv.id = 'color' + indexColorPalette;
      colorPaletteSection.appendChild(colorPaletteDiv);
      if (colorPaletteDiv.id === 'color1') {
        colorPaletteDiv.classList.add('selected');
      }
    } 
  }
  createColorPalette();
    function createGridLine (size, heightWidth) {
    for (let i = 0; i < size * size; i += 1) {
      const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.backgroundColor = 'white';
    pixel.style.width = `${heightWidth}px`;
    pixel.style.height = `${heightWidth}px`;
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    document.querySelector('#pixel-board').appendChild(pixel);
    }
  }

  function createGrid(size, heightWidth) {
      createGridLine (size, heightWidth);
      pixelBoard.style.width = '0px';
      pixelBoard.style.width = `${((heightWidth + 2) * size)}px`;
  }
  createGrid(5, 40);
}


