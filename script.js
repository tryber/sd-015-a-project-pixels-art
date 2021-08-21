let botaoApagar = document.getElementById('clear-board');
let allPixels = document.getElementsByClassName('pixel');

function clearBoard() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  } 
}

botaoApagar.addEventListener('click', clearBoard);