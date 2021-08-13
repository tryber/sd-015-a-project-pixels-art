const preto = document.querySelector('.preto')
const vermelho = document.querySelector('.vermelho')
const azul = document.querySelector('.azul')
const verde = document.querySelector('.verde')

// Requisito 7
function addClassSelected(event) {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected')
  event.target.classList.add('selected')
}

preto.addEventListener('click', addClassSelected)
vermelho.addEventListener('click', addClassSelected)
azul.addEventListener('click', addClassSelected)
verde.addEventListener('click', addClassSelected)

// 