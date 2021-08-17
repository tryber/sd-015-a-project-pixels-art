let numberOfBlocks = 5;

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

  
