let numberOfBlocks = 5;

for (let i = 0, i < numberOfBlocks, i += 1) {
    for (let j = 0, j < numberOfBlocks, j += 1) {

    }
}

// Cria uma caixa com base nas diferentes classes
function createBlock(className) {
    let block = document.createElement("div");
    block.className = className;
    return block;
  }

  // Preenche uma linha
  function createLine(divs) {
    for (let i = 1; i <= numberOfBlocks; i += 1) {
        let block = createblock("block");
        divs.appendChild(block);
    }
  }
