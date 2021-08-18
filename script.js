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
  todosPixels.style.removeAttribute('background-color')
  
}