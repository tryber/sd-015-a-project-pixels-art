// Requisito 3
// function firstBlock() {
//   const firstBlock = document.getElementsByClassName('color')[0]
//   firstBlock.style.backgroundColor = 'black'
//   firstBlock.style.padding = '25px 25px 25px 25px'
//   firstBlock.style.display = 'inline-block'
// }
// firstBlock();

// Cria tabela de pixels
function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 1; index < 6; index += 1) {
    const pixelColumn = document.createElement('div');
    pixelBoard.appendChild(pixelColumn);
    for (let index2 = 1; index2 < 6; index2 += 1) {
      const pixelLine = document.createElement('div');
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}
createTable();
