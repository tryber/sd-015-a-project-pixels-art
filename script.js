
//Gerando a palleta de cor
generateColorPallete()
function generateColorPallete() {
  let parent = document.getElementById('color-palette')
  for(let c = 0; c < 4; c += 1) {
    let div = document.createElement('div')
    if(c === 0){
      div.className = 'color selected'
      div.style.backgroundColor = 'black'
      parent.appendChild(div)
    }else {
      div.className = 'color'
      div.style.backgroundColor = gerarCorAleatoria()
      parent.appendChild(div)
    }
  }
}
//Gerando cores aleatorias
function gerarCorAleatoria() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}


//Gerando o pixel-bord
generatePixelBoard(25)
function generatePixelBoard(size) {
  let parent = document.getElementById('pixel-board')
  for(let c = 0; c < size; c += 1) {
    let div = document.createElement('div')
    div.className = "pixel"
    parent.appendChild(div)
  }
}


escolhendoCor()
function escolhendoCor() {
  let parent = document.querySelector('#color-palette')
  parent.addEventListener('click', e => {
    let cores = document.getElementsByClassName('color')
    for(let color of cores){
      color.className = 'color'
    }
    e.target.className = 'color selected'
  })
}






//Colorir a paleta
colorir()
function colorir() {
  let pixels = document.getElementById('pixel-board')
  pixels.addEventListener('click', e => {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
  })
  
}


//clear box
clear()
function clear() {
  let button = document.getElementById('clear-board')
  let pixels = document.getElementsByClassName('pixel')
  button.addEventListener('click', e => {
    for(let pixel of pixels){
      pixel.style.backgroundColor = 'white'
    }
  })
}


//mudar Tamanho
changeSize()
function changeSize() {
  let button = document.querySelector('#generate-board')
  button.addEventListener('click', e => {
    let input = document.querySelector('#board-size').value
    if(input === ''){
      alert('Board inválido!')
    }else {
      input < 5 ? input = 5 : ''
      input > 50 ? input = 50 : ''
      let board = document.querySelector('#pixel-board')
      board.innerHTML = ''
      board.style.gridTemplateColumns = `repeat(${input}, 1fr)`
      board.style.gridTemplateRows = `repeat(${input}, 1fr)`
      generatePixelBoard(input * input)
    }
  })

}


