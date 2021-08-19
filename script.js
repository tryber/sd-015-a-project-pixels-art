let corDoClick = 'black'
let botaoApagar = document.getElementById('clear-board')

function botaCorDoClick(color){
  corDoClick = color
}

function botaCor (pixel) {
  pixel.style.backgroundColor = corDoClick
}
botaoApagar.addEventListener ('click', apagarTudo)
function apagarTudo () {
  let todosPixels = document.querySelectorAll('.pixel')
  for (let index = 0; index < todosPixels.length; index += 1) {
    todosPixels[index].style.backgroundColor = 'white'
  }
  // todosPixels.style.removeAttribute('style')
}