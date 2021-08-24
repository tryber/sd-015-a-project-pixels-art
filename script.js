const board = document.getElementById("pixel-board");

function creatingBoard(size){
  for(index = 0; index < size; index += 1){

    for(index2 = 0; index2 < size; index2 +=1){
      const line = document.createElement("div");
      line.className = "pixel";
      board.appendChild(line);
    }
  }
}
creatingBoard(5);

