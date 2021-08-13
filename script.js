function selectBlack() {
  const selectFirst = document.getElementById('black');
  selectFirst.classList.add('selected');
}
selectBlack();

let firstColor = document.getElementById('black');
let secondColor = document.getElementById('red');
let thirdColor = document.getElementById('blue');
let fourthColor = document.getElementById('green');

function changeSelected(newColor) {
  let changeColor = document.getElementsByClassName('selected')[0];
  changeColor.classList.remove('selected');
  newColor.target.classList.add('selected');
}

firstColor.addEventListener('click', changeSelected);
secondColor.addEventListener('click', changeSelected);
thirdColor.addEventListener('click', changeSelected);
fourthColor.addEventListener('click', changeSelected);

