// CRIA 5 DIVS PARA CADA LINHA

function blockMaker(sideSize) {
  let board = document.getElementById('pixel-board');
  for (index = 1; index <= sideSize; index += 1) {
    let line = document.createElement('div');
    for (index_2 = 1; index_2 <= sideSize; index_2 += 1) {
      let block = document.createElement('div');
      block.className = 'pixel';
      block.style.width = '40px';
      block.style.height = '40px';
      block.style.border = '1px solid black';
      block.style.backgroundColor = 'rgb(255, 255, 255)';
      line.appendChild(block);
    }
    console.log(line)
    board.appendChild(line);

  }
}

let sideSize = 5;
blockMaker(sideSize);
