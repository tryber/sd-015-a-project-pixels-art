// eslint-disable-next-line no-unused-vars
function createBox(parent) {
  const colors = ['black', 'blue', 'green', 'yellow'];
  for (let i = 0; i < colors.length; i += 1) {
    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const parentElement = document.getElementById(parent);

    newDiv.className = 'color';
    newDiv.style.backgroundColor = colors[i];
    newLi.innerHTML = '  ';
    parentElement.appendChild(newDiv);
    newDiv.appendChild(newLi);
  }
}
