/* window.onload = function() {
  let basePyramid = 5;
  let controlRight = basePyramid; // 5
  let lines = document.querySelectorAll(".line");

  fillTriangle(lines);

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("pixel"));
      }
    }
  }
} */