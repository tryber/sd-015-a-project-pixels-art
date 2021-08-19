let numberOfBlocks = 5;
let pixelBoard = document.querySelector('#pixel-board');

let block = document.createElement('div');
block.className = 'pixel2';

let pixelLine = document.createElement('div');
pixelLine.className = 'line';

    pixelLine.appendChild(block);
    pixelLine.appendChild(block);
    pixelLine.appendChild(block);
    pixelLine.appendChild(block);
    pixelLine.appendChild(block);




    pixelBoard.appendChild(pixelLine);
    pixelBoard.appendChild(pixelLine);
    pixelBoard.appendChild(pixelLine);
    pixelBoard.appendChild(pixelLine);
