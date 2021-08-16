const preto = document.querySelector('.preto');
preto.style.backgroundColor = 'black';
const vermelho = document.querySelector('.vermelho');
vermelho.style.backgroundColor = 'red';
const azul = document.querySelector('.azul');
azul.style.backgroundColor = 'blue';
const verde = document.querySelector('.verde');
verde.style.backgroundColor = 'green'
const pixel = document.querySelectorAll('.pixel');


// Requisito 7
function addClassSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

preto.addEventListener('click', addClassSelected);
vermelho.addEventListener('click', addClassSelected);
azul.addEventListener('click', addClassSelected);
verde.addEventListener('click', addClassSelected);

// Requisito 8
function addColors(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
}
// source: https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', addColors);
}


window.addEventListener('click', function(event) {
  console.log(event)
  var testeCor = event.target.classList[1]
  var testElementoSelecionado = event.target
  console.log(testeCor)
  console.log(testElementoSelecionado)
})