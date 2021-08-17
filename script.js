function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < 5; i += 1) {
    //cria coluna
    let pixelColumn = document.createElement('div')
    pixelColumn.id = "column";
    pixelBoard.appendChild(pixelColumn);
    //cria 5 linhas dentro da coluna
    for (let i = 0; i < 5; i += 1) {
      let pixelLine = document.createElement('div')
      pixelLine.className = "pixel";
      pixelLine.id = "line";
      pixelColumn.appendChild(pixelLine);
    }
  }
}
createTable()