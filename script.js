function createPalleteColor(color) {
  const palleteBox = document.getElementById('color-palette');
  const palleteColor = document.createElement('div');
  palleteColor.style.backgroundColor = color;
  palleteColor.style.width = '40px';
  palleteColor.style.height = '40px';
  palleteColor.className = 'color';
  palleteColor.style.border = 'solid 1px';
  if(color == 'black'){
    palleteColor.className = 'color selected';
  }
  palleteColor.addEventListener('click',function(event){
    let colorElements = document.getElementsByClassName('color');
    clearSelectedClass(colorElements);
    makeSelected(event.target)    
  })
  palleteBox.appendChild(palleteColor);
}
function clearSelectedClass(elements){
  for(let index = 0; index < elements.length; index += 1){
    elements[index].className = elements[index].className.replace(' selected','');
  }
}
function makeSelected(element){
  element.className = `${element.className} selected`
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
  pixel.addEventListener('click',function(event){
    event.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
    console.log(document.getElementsByClassName('color selected')[0])
  })
  line.appendChild(pixel);
  
}

function fillBoard(numberOfLines,numberOfColumns){
  createLines(numberOfLines);
  const lines = document.getElementsByClassName('lines');
  for(let index = 0; index < lines.length; index += 1){
    fillLines(lines[index],numberOfColumns);
  }
}
function clearBoard(){
  const bttn = document.getElementById("clear-board");
  bttn.addEventListener('click',function(){
    const pixels = document.getElementsByClassName('pixel');
    for( let index = 0; index < pixels.length; index += 1){
      pixels[index].style.backgroundColor = 'white';
    }
  })
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
fillBoard(5,5)
document.getElementById('generate-board').addEventListener('click',function(){
  let numberOfLines = document.getElementById('board-size').value;
  if(numberOfLines == ""){
    window.alert('Board inválido!');
  }
  if(numberOfLines < 5){
    numberOfLines = 5;
  }
  if(numberOfLines > 50){
    numberOfLines = 50;
  }
  document.getElementById("pixel-board").innerHTML = "";
  fillBoard(numberOfLines,numberOfLines);
  console.log(numberOfLines)
})
//fillBoard(5,5)
clearBoard();
