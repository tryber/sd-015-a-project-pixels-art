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