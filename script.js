//color pallete
function createPalette() {
    for (let i = 0; i <  4; i += 1) {
    let colorsArray = ['black', 'red', 'green', 'blue'];
    let color = document.querySelectorAll('.color')[i];
    color.style.backgroundColor = colorsArray[i];
   }
}
createPalette();

// Create Pixe-Board

function createBoard() {
    let pixelBoard = document.createElement('section');
    pixelBoard.id = 'pixel-board';
    document.body.appendChild(pixelBoard);
 
    
    for (i = 0 ; i < 5; i += 1) {
        let line = document.createElement('div');  
        line.className = 'line'      
        pixelBoard.appendChild(line);        
        for (x = 0 ; x < 5; x += 1){
        let pixelBlock = document.createElement('div');
        pixelBlock.className = 'pixel';
        pixelBlock.style.backgroundColor = 'white';
        line.appendChild(pixelBlock);
        }
    }
}
createBoard();
