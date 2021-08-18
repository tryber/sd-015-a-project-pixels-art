// let body = document.querySelector('body');
const mainColors = document.querySelectorAll('.color');

function xablau(evea) {
  const foraSelect = document.querySelector('.selected');
  console.log(foraSelect.classList);
  foraSelect.classList.remove('selected');
  evea.target.classList.add('selected');
}
for (let index = 0; index < mainColors.length; index += 1) {
  mainColors[index].addEventListener('click', xablau);
}
const divPixels = document.querySelector('#pixel-board');
function quadrados(chamei) {
    const pegandoClasse = document.querySelector('.selected');
  chamei.target.style.backgroundColor = getComputedStyle(pegandoClasse).backgroundColor;
}
divPixels.addEventListener('click', quadrados);

// function alertar(event) {
//     // alert('clicou')
// console.log(event.target)
// }
// body.addEventListener('click', alertar);
//getComputedStyle
