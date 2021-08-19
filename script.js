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