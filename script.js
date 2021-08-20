// Usei como referencia código visualizado no repositório do Davio Lopes.
// Requisito 7
const paleta = document.querySelectorAll('.color');

function changeSelected() {
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].classList.remove('selected');
  }
}

function newSelected(cor) {
  changeSelected();
  cor.target.classList.add('selected');
}

for (let i = 0; i < paleta.length; i += 1) {
  paleta[i].addEventListener('click', newSelected);
}

function pintaPixel(event) {
  let selectedClass = document.querySelector('.selected');
  cssSelected = window.getComputedStyle(selectedClass, null).getPropertyValue('background-color');
  
  event.target.style.background = cssSelected;
  console.log(event.target);

}


const pixel = document.getElementsByClassName('pixel'); 
for (let i = 0; i < pixel.length; i += 1) {
pixel[i].addEventListener('click', pintaPixel);
}
