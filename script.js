//Requisito 6: define preto como 'selected'.
window.onload = function () {
  document.getElementById('black').classList.add('selected');
}

//Requisito 7: Apenas uma cor com a classe selected.
const colorPallete = document.getElementById("color-palette")

colorPallete.addEventListener("click", function (event) {
  for (let index = 0; index < colorPallete.children.length; index += 1) {
    colorPallete.children[index].classList.remove('selected')
  }
  event.target.classList.add("selected")
})

//Requisito 8: Permite pintar os pixels.

const selectedColor = document.querySelector('.selected');
const allColors = document.querySelectorAll('.color');
const clearButton = document.getElementById('clear-board');
const allPixels = document.querySelectorAll('.pixel');

allPixels.forEach(index => {
  index.addEventListener('click', function(event){
    event.target.style.backgroundColor = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color'); //Material consultado sobre 'getComputedStyle' https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  }); //Material consultado sobre 'getPropertyValue' https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
})

//Requisito 9: Botão de limpar a pixel-board.

clearButton.addEventListener('click', function(){
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].removeAttribute('style'); //Material consultado sobre o uso do 'removeAttribute' https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
  }
})
