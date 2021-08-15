window.onload = function () {

  function createColorPalette () {
    const colorPaletteSection = document.querySelector('#color-palette');
    for (let indexColorPalette = 1; indexColorPalette < 5; indexColorPalette += 1) {
      let colorPaletteDiv = document.createElement('div');
      colorPaletteDiv.className = 'color';
      colorPaletteDiv.id = 'color' + indexColorPalette;
      colorPaletteSection.appendChild(colorPaletteDiv);
    } 
  }
  createColorPalette();
  
  function createPixelGrid () {
    let line = 5;
    let column = 5;

    for (let i = 0; i < line; i += 1) {
      for (let j = 0; j < column; j += 1) {
        const pixel = document.createElement('div');
        pixel.className = "pixel";
        document.getElementById('pixel-board').appendChild(pixel);
      }
    }
  }
  createPixelGrid();
}


