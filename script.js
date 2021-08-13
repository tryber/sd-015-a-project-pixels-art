/* eslint-disable no-unused-vars */
function createBox(parent) {
  const colors = ['black', 'blue', 'green', 'yellow'];
  for (let i = 0; i < colors.length; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'color';
    newDiv.style.backgroundColor = colors[i];
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}

function createPixel(parent) {
  for (let i = 0; i < 25; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}
