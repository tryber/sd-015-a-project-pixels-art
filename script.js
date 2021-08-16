const todasCores = document.getElementsByClassName('color');
function selecionadorCor() {
  for (let index = 0; index < todasCores.length; index += 1) {
    todasCores[index].classList.remove('selected');
  }
  event.target.className = 'color selected';
}
for (let index = 0; index < todasCores.length; index += 1) {
  todasCores[index].addEventListener('click', selecionadorCor);
}
let cadaQuadrado = document.getElementsByClassName('pixel')
function pintando() {
  const selecionado = document.getElementsByClassName('selected')[0];
  event.target.style.backgroundColor = selecionado.id;
}
for (let index = 0; index < cadaQuadrado.length; index += 1) {
  cadaQuadrado[index].addEventListener('click', pintando);
}
const botaoLimpar = document.getElementById('clear-board');
function branco() {
  for (let index = 0; index < cadaQuadrado.length; index += 1) {
    cadaQuadrado[index].style.backgroundColor = 'white';
  }
}
botaoLimpar.addEventListener('click', branco);