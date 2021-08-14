function quadradoDeCor () {
  let tamanho = 5
  let quadroDePixels = document.createElement("div")
  quadroDePixels.id = "pixel-board"
  document.body.appendChild(quadroDePixels)
  for (let index = 0; index < tamanho; index += 1) {
    let novoQuadrado = document.createElement("div")
    novoQuadrado.className = "pixel"
    quadroDePixels.appendChild(novoQuadrado)
    for (let index1 = 0;index1 < 4; index1 += 1) {
      let linhas = document.createElement("div")
      linhas.className = "pixel"
      quadroDePixels.appendChild(linhas)
    }
  }
}

quadradoDeCor()

// function quadradoDeCor () {
//   let tamanho = 5
//   let quadroDePixels = document.createElement("div")
//   quadroDePixels.id = "pixel-board"
//   document.body.appendChild(quadroDePixels)
//   for (let index = 0; index < tamanho; index += 1) {
//     let novoQuadrado = document.createElement("div")
//     novoQuadrado.className = "pixel"
//     quadroDePixels.appendChild(novoQuadrado)
//   }
// }

// function chamarQuadrado () {
//   for (let index = 0;index < 5; index += 1) {
//     quadradoDeCor()
//   }
// }

// chamarQuadrado()

function classeSelect () {
  let paletaDeCores = document.querySelector(".selected")
  let purple = document.querySelector("#purple")
  let green = document.querySelector("#green")
  let black = document.querySelector("#black")
  let red = document.querySelector("#red")
  purple.addEventListener("click", function() {
  purple.className = "color selected"
  green.className = "color"
  black.className = "color"
  red.className = "color"
})
}

classeSelect()


function classeSelect () {
  let paletaDeCores = document.querySelector(".selected")
  let purple = document.querySelector("#purple")
  let green = document.querySelector("#green")
  let black = document.querySelector("#black")
  let red = document.querySelector("#red")

  purple.addEventListener("click", function() {
    purple.className = "color selected"
    green.className = "color"
    black.className = "color"
    red.className = "color"
})

  green.addEventListener("click", function() {
    purple.className = "color"
    green.className = "color selected"
    black.className = "color"
    red.className = "color"
})

  red.addEventListener("click", function() {
    purple.className = "color"
    green.className = "color"
    black.className = "color"
    red.className = "color  selected"
})

  black.addEventListener("click", function() {
    purple.className = "color"
    green.className = "color"
    black.className = "color selected"
    red.className = "color"
})
}

classeSelect()

