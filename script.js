// cor random
function setColor() {
  const tag = '#';
  const colorSelector = document.getElementsByClassName('color');
  for (let i = 0; i < colorSelector.length; i += 1) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // code to random color found on https://css-tricks.com/snippets/javascript/random-hex-color/
    if (i === 0) {
      colorSelector[i].style.backgroundColor = 'black';
    } else {
      colorSelector[i].style.backgroundColor = tag + randomColor;
    }
  }
}
setColor();
