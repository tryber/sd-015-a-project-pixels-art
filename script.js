// function quadradoDeCor () {
//   let tamanho = 5
//   let quadroDePixels = document.createElement("div")
//   quadroDePixels.id = "pixel-board"
//   document.body.appendChild(quadroDePixels)
//   for (let index = 0; index < tamanho; index += 1) {
//     let novoQuadrado = document.createElement("div")
//     novoQuadrado.className = "pixel"
//     quadroDePixels.appendChild(novoQuadrado)
//     for (let index1 = 0;index1 < tamanho; index1 += 1) {
//       let linhas = document.createElement("div")
//       linhas.className = "pixel"
//       quadroDePixels.appendChild(linhas)

//     }
//   }
// }

// quadradoDeCor()

function quadradoDeCor () {
  let tamanho = 5
  let quadroDePixels = document.createElement("div")
  quadroDePixels.id = "pixel-board"
  document.body.appendChild(quadroDePixels)
  for (let index = 0; index < tamanho; index += 1) {
    let novoQuadrado = document.createElement("div")
    novoQuadrado.className = "pixel"
    quadroDePixels.appendChild(novoQuadrado)
  }
}

function chamarQuadrado () {
  for (let index = 0;index < 5; index += 1) {
    quadradoDeCor()
  }
}

chamarQuadrado()

