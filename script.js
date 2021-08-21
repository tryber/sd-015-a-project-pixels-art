window.onload = function () {

  const pixelBoard = document.querySelector("#pixel-board");
  const colorPalette = document.getElementById('color-palette');
  const clearBtn = document.getElementById('clear-board');

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
    pixel.style.backgroundColor = 'white'
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

  function changeSelected (event) {
    let colors = document.querySelectorAll('.color');
    for(let i = 0; i < colors.length; i += 1) {
      if (colors[i] !== event.target) {
        colors[i].classList.remove('selected');
      } else {
        colors[i].classList.add('selected');
      }
    }
  }
  colorPalette.addEventListener('click', changeSelected);

  function paintPixels (event) {
    const selectedPixel = event.target;
    const selectedColor = document.querySelector('.selected');
    const style = getComputedStyle(selectedColor);
    selectedPixel.style.backgroundColor = style.backgroundColor;
  }
  pixelBoard.addEventListener('click', paintPixels);

  function clearBoard () {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white'
    }
  }
  clearBtn.addEventListener('click', clearBoard);
}

