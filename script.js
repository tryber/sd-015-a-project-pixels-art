const arrayOfColors = document.querySelectorAll('.color');
arrayOfColors[0].style.backgroundColor = 'black';
arrayOfColors[0].className += ' selected';
arrayOfColors[1].style.backgroundColor = 'red';
arrayOfColors[2].style.backgroundColor = 'brown';
arrayOfColors[3].style.backgroundColor = 'green';


for (let index = 0; index < 25; index+=1) {
  let box = document.createElement('div');
  box.className = 'pixel';
  box.style.width = '40px';
  box.style.height = '40px';
  box.style.display = 'inline-block';
  box.style.border = 'solid 1px black';
  box.style.backgroundColor = 'white';
  document.querySelector('#pixel-board').appendChild(box);
}

for(let superIndex = 0; superIndex < arrayOfColors.length; superIndex+=1) {
  let colorOfChoice = arrayOfColors[superIndex];
  colorOfChoice.addEventListener("click", () => {
    colorOfChoice.className += " selected";
    for(let hyperIndex = 0; hyperIndex<arrayOfColors.length; hyperIndex+=1) {
      if(hyperIndex != superIndex) {
        arrayOfColors[hyperIndex].className = "color";
      
      }
    }
  })
}



  for(let megaIndex = 0; megaIndex < 25; megaIndex += 1) {
    let boxToBeFilled = document.querySelectorAll(".pixel")[megaIndex];
    boxToBeFilled.addEventListener("click", () => {
      boxToBeFilled.style.backgroundColor = document.querySelector(".color.selected").style.backgroundColor;
    })
  }

  let clearButton = document.querySelector("#clear-board");
  clearButton.addEventListener("click", () => {
    let arrayOfBoxes = document.querySelectorAll(".pixel");
    for(let coolIndex = 0; coolIndex < arrayOfBoxes.length; coolIndex +=1) {
      arrayOfBoxes[coolIndex].style.backgroundColor = "white";
    }
  })
