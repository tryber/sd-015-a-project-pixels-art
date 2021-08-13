const paletaDeCores = ['blue', 'red', 'green', 'yellow', 'black'];

window.onload = function () {
  function definirPaletaDeCores() {
    let colorSlot = document.getElementById('color-palette').children;

    for (let index = 0; index < colorSlot.length; index += 1) {
      colorSlot[index].style.backgroundColor = paletaDeCores[index];
    }
  }

  definirPaletaDeCores();
};
