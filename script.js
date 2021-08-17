function createTable() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    //adiciona linhas
    const pixelLine = document.createElement('div');
    pixelLine.id ="line";
    pixelBoard.appendChild(pixelLine);
    // adiciona 5 colunas para cada linha
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixelColumn = document.createElement('div');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.className = 'pixel';
    }
  }
}
createTable();