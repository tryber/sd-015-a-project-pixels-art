function criaTabela() {
  const pixBoard = document.querySelector('#pixel-board');
  for (let coluna = 0; coluna < 5; coluna+=1) {
    let columnPixel = document.createElement('div')
    columnPixel.id = "coluna";
    pixBoard.appendChild(columnPixel);
    for (let linha = 0; linha < 5; linha+=1) {
      let linePixel = document.createElement('div');
      linePixel.className = "pixel";
      linePixel.id = "linha";
      columnPixel.appendChild(linePixel);
    }
  }
}

criaTabela();