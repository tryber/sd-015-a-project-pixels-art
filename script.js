const colors = document.getElementById('color-palette');
let actualColor = 'black';

function selectColor() {
  colors.addEventListener('click', function (event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
    actualColor = event.target.id;
  });
}

selectColor();