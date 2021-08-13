window.onload = function(){
  const colors = ['black', 'red', 'green', 'blue',];
  const gridHeight = 5;
  const gridWidth = 5;
  const gridSize = gridHeight * gridWidth;

  function palette(howMany) {
    for (let i = 0; i < howMany.length; i += 1) {
      const divP = document.createElement('div');
      const parent = document.querySelector('#color-palette');
      divP.className = 'color';
      divP.classList.add(howMany[i]);
      divP.style.backgroundColor = howMany[i];

      parent.appendChild(divP);
    }
  }

  palette(colors);

  function createGrid() {
    for (let i = 0; i < gridSize; i += 1) {
      const divG = document.createElement('div');
      const parent = document.querySelector('#pixel-board');
      divG.className = 'pixel';

      parent.appendChild(divG);
    }
  }

  createGrid();

}
