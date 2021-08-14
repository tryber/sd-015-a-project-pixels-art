// Requisito 3
// function firstBlock() {
//   const firstBlock = document.getElementsByClassName('color')[0]
//   firstBlock.style.backgroundColor = 'black'
//   firstBlock.style.padding = '25px 25px 25px 25px'
//   firstBlock.style.display = 'inline-block'
// }
// firstBlock()

// Cria tabela de pixels
function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 1; i < 6; i += 1) {
    let pixelColumn = document.createElement('div')
    pixelBoard.appendChild(pixelColumn);
    for (let i = 1; i < 6; i += 1) {
      let pixelLine = document.createElement('div')
      pixelColumn.appendChild(pixelLine);
      pixelLine.className = 'pixel';
    }
  }
}
createTable()