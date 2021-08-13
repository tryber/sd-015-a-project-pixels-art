

let cores = ['black', 'blue', 'green', 'purple']

for (index = 0; index < cores.length; index +=1){
  let motherPalette = document.createElement('div')
  let divPalette = document.querySelector('#color-palette').appendChild(motherPalette)
  divPalette.className = 'color' 
  divPalette.style.backgroundColor = cores[index]
  divPalette.innerHTML = cores[index]
}

for (idx = 0; idx < 5; idx +=1){
  let motherPixel = document.createElement('div')
  let eachPixel = document.querySelector('#pixel-board').appendChild(motherPixel)
  eachPixel.innerHTML = 'oi'
  eachPixel.className = 'pixel'
  eachPixel.style.backgroundColor = 'white'
  for (idx2 = 0; idx2 < 4; idx2 +=1) {
    let motherPixel2 = document.createElement('div')
    let eachPixel2 = document.querySelector('#pixel-board').appendChild(motherPixel2)
    eachPixel2.innerHTML = 'oi'
    eachPixel2.className = 'pixel'
    eachPixel2.style.backgroundColor = 'white'

  }

}