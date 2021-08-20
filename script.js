
// Requisito 06 - Define a cor preta como padrão de seleção (selected)



// Requisito 10
let numberOfBlocks = 5;
let pixelBoard = document.querySelector('#pixel-board');

for (i = 0; i < numberOfBlocks; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'line';
    
    for (let j = 0; j < numberOfBlocks; j += 1) {
        let block = document.createElement('div');
        block.className = 'pixel';
        pixelLine.appendChild(block);
    }
    
    pixelBoard.appendChild(pixelLine);

}
