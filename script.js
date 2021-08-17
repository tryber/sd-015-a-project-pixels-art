const selectedColor = document.getElementById('color-palette');

// Mudar cor selecionada
// Consulta: https://www.w3schools.com/jsref/prop_element_classlist.asp

function selColor(event) {
  const seleColor = document.querySelector('.selected');
  seleColor.classList.remove('selected');
  event.target.classList.add('selected');
}

selectedColor.addEventListener('click', selColor);
