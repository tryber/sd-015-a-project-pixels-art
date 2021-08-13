// Gera cor aleatória
function randomColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  return(`rgb(${r}, ${g}, ${b})`);
};

window.onload = function makeRandom() {
  document.getElementById('secondColor').style.backgroundColor = randomColor();
  document.getElementById('thirdColor').style.backgroundColor = randomColor();
  document.getElementById('fourthColor').style.backgroundColor = randomColor();
}
