const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const clear = document.querySelector('#clear-board');
let color;
let pixel;
let paint = "black";

function selectColor(e) {
	for (color of colors){
		color.classList.remove('selected');
	}
	e.target.classList.add('selected');
	if (e.target.classList.contains('selected')) {
		paint = e.target.innerText
	}
}

function setColor(e) {
  e.target.style.backgroundColor = paint;
}

function clearBoard(e) {
  for(pixel of pixels) {
    pixel.style.backgroundColor = "white";
  }
}

for(color of colors) {
  color.addEventListener('click', selectColor);
}

for(pixel of pixels) {
  pixel.addEventListener('click', setColor);
}

clear.addEventListener('click', clearBoard);