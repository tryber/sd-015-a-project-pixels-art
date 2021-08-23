const board = document.getElementById("pixel-board");

function creatingBoard(nColum,nLine){
  for(index = 0; index < nColum; index += 1){
    const colum = document.createElement("div");
    board.appendChild(colum);

    for(index2 = 0; index2 < nLine; index2 +=1){
      const line = document.createElement("div");
      line.className = "pixel";
      colum.appendChild(line);
    }
  }
}
creatingBoard(5,5);