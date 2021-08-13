const paletaDeCores = ['black', 'red', 'green', 'blue'];

window.onload = function () {
  function definirPaletaDeCores() {
    const colorSlot = document.getElementById('color-palette').children;

    for (let index = 0; index < colorSlot.length; index += 1) {
      colorSlot[index].style.backgroundColor = paletaDeCores[index];
    }
  }

  definirPaletaDeCores();

  document.querySelector('.color').classList.add('selected');
};
