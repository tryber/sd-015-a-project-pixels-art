window.onload
//cria os div pixal
for (let i = 0; i < 25; i += 1) {
  const caixa = document.createElement('cor');
  caixa.className = 'pixel';
  document.getElementById('pixel-board').appendChild(caixa);
}
let event = 
// muda classe da cor para selecionado
function mudaClasse() {
  let corselecionada = document.getElementById("color-palette");
  corselecionada.classList.add("selected");
}

function removeClasse(){
  let cormudada = document.getElementById();
  cormudada.classList.remove("Selected");
}
