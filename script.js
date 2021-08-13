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

function changeColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index +=1) {
    pixel[index].addEventListener('click', function () {
      pixel[index].style.backgroundColor = actualColor;
    });
  };
};
changeColor();