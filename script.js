let paitingPixels = document.querySelector('#pixel-board');

function makeTable() {
  for (let i = 0; i < 5; i += 1) {
    let ul = document.createElement('ul');
    paitingPixels.appendChild(ul).className = 'lines';
  }

  for (let e = 0; e < 5; e += 1) {
    for (let i = 0; i < 5; i += 1) {
      let li = document.createElement('li');
      paitingPixels.children[e].appendChild(li).className = 'pixel';
    }
  }
}

makeTable();