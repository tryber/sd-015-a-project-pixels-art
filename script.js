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

const palette = document.getElementById("color-palette")

function colorPick(event){
  const colors = palette.getElementsByTagName("div");
  for(let index = 0; index < colors.length; index +=1){
    if(colors[index].className.includes(" selected")){
      colors[index].className = colors[index].className.replace(" selected","");
    }
  }
  event.target.className += " selected";
}

function eventSelection(){
  const colors = palette.getElementsByTagName("div");
  for(let index = 0; index < colors.length; index += 1){
    colors[index].addEventListener("click", colorPick);
  }
}
eventSelection();