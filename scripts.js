let clickButton = document.getElementById('color-palette')
clickButton.addEventListener('click', color);

function color(event){
  let colorsAdd = document.querySelectorAll('.color')
  for (let colors of colorsAdd){
   colors.classList.remove('selected')
  }
  event.target.classList.add('selected')
}