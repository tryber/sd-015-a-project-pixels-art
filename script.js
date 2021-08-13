const colorPallete = document.querySelector('#color-palette');


function selectColor(event) {
  const removeselcted = document.querySelector('.selected');
  removeselcted.classList.remove('selected');
  event.target.classList.add('selected');
}

colorPallete.addEventListener('click', selectColor);


function colorizeSquare(SQUaRE) {

}


