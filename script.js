let paitingPixels = document.querySelector('#pixel-board');
let colors = document.getElementsByClassName('color');

function makeTable(number) {
  for (let i = 0; i < number; i += 1) {
    let ul = document.createElement('ul');
    paitingPixels.appendChild(ul).className = 'lines';
  }

  for (let e = 0; e < number; e += 1) {
    for (let i = 0; i < number; i += 1) {
      let li = document.createElement('li');
      paitingPixels.children[e].appendChild(li).className = 'pixel';
    }
  }
}

makeTable(5);

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener("click", function() {
    document.getElementsByClassName('selected')[0].className = 'color';
    colors[i].className = 'color selected';
  })
}

