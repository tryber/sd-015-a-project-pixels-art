const colorSelected = document.querySelectorAll('.color');

// Mudando a tag selecionada

function changeTagSelected(tagSelected) {
  let oldTagSelected = '';

  let newTagSelected = tagSelected;

  colorSelected.forEach((paletColor) => {
    paletColor.addEventListener('click', (event) => {
      oldTagSelected = newTagSelected;

      newTagSelected = event.target;

      oldTagSelected.classList.remove('selected');

      newTagSelected.classList.add('selected');
    });
  });
}
// Descobrindo a tag selecionada
let selected = '';

colorSelected.forEach((color) => {
  if (color.classList.contains('selected')) {
    selected = color;

    changeTagSelected(selected);
  }
});

const whitePixels = document.querySelectorAll('.pixel');

// Adicionando o escutador de eventos em cada pixel, descobrindo a paleta de cor que está selecionada, aplicando o estilo no pixel clicado

whitePixels.forEach((pixel) => {
  pixel.addEventListener('click', () => {
    const paletSelected = document.querySelector('.selected');

    const pixelWhite = pixel;

    if (paletSelected.classList.contains('black')) {
      pixelWhite.style.backgroundColor = 'black';
    }
    if (paletSelected.classList.contains('red')) {
      pixelWhite.style.backgroundColor = 'red';
    }
    if (paletSelected.classList.contains('blue')) {
      pixelWhite.style.backgroundColor = 'blue';
    }
    if (paletSelected.classList.contains('green')) {
      pixelWhite.style.backgroundColor = 'green';
    }
  });
});

const clearButton = document.querySelector('#clear-board');

clearButton.addEventListener('click', () => {
  whitePixels.forEach((pixel) => {
    if (pixel.style.backgroundColor) {
      pixel.removeAttribute('style');
    }
  });
});
