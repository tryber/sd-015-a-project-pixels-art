function createPalleteColor(color) {
  const palleteBox = document.getElementById('color-palette');
  const palleteColor = document.createElement('div');
  palleteColor.style.backgroundColor = color;
  palleteColor.style.width = '50px';
  palleteColor.style.height = '50px';
  palleteColor.className = 'color';
  palleteBox.appendChild(palleteColor);
}

function createLines(numberOfLines){
  const pixelBoard = document.getElementById('pixel-board');
  for(let index = 0; index < numberOfLines; index +=1){
    const line = document.createElement('div');
    line.className = 'lines';
    pixelBoard.appendChild(line);
  }  
}
function fillLines(line,numberOfColumns){
  for(let index = 0; index < numberOfColumns; index += 1){
    createPixel(line);    
  }
}
function createPixel(line){
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = 'white';
  pixel.style.border = 'solid 1px';
  pixel.style.width = '40px';
  pixel.style.height = '40px';
  line.appendChild(pixel);
}

function fillBoard(numberOfLines,numberOfColumns){
  createLines(numberOfLines);
  const lines = document.getElementsByClassName('lines');
  console.log(lines)
  for(let index = 0; index < lines.length; index += 1){
    fillLines(lines[index],numberOfColumns);
  }
}

// function createPixelLines(columns){
//   const pixelBoard = document.getElementById('pixel-board');
//   for(let index = 0; index < columns; index +=1){
//     const pixel = document.createElement('div');
//     pixel.className = 'pixel';
//     pixel.style.backgroundColor = 'white';
//     pixel    
//   }
// }

createPalleteColor('black');
createPalleteColor('#1abc9c');
createPalleteColor('#3498db');
createPalleteColor('#e74c3c');
createPalleteColor('#f39c12');
fillBoard(5,5)
