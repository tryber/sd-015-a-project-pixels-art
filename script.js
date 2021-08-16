let todasCores = document.getElementsByClassName('color');
for (index = 0; index < todasCores.length; index += 1) {
  todasCores[index].addEventListener('click', selecionadorCor)
}
function selecionadorCor(event) {
  for (index = 0; index < todasCores.length; index += 1) {
    todasCores[index].classList.remove('selected');
  }
  event.target.className = 'color selected';
}
let cadaQuadrado = document.getElementsByClassName('pixel')
for (index = 0; index < cadaQuadrado.length; index += 1) {
  cadaQuadrado[index].addEventListener('click', pintando)
}
function pintando(event) {
  let selecionado = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selecionado.id
}
let botaoLimpar = document.getElementById('clear-board')
botaoLimpar.addEventListener('click', branco)
function branco() {
  for (index = 0; index < cadaQuadrado.length; index += 1) {
    cadaQuadrado[index].style.backgroundColor = 'white'
  }
}
