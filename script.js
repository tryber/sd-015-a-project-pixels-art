// let body = document.querySelector('body');
const mainColors = document.querySelectorAll('.color');

function xablau(event) {
  const foraSelect = document.querySelector('.selected');
  console.log(foraSelect.classList);
  foraSelect.classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < mainColors.length; index += 1) {
  mainColors[index].addEventListener('click', xablau);
}

// function alertar(event) {
//     // alert('clicou')
// console.log(event.target)
// }
// body.addEventListener('click', alertar);
