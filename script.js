let paitingPixels = document.querySelector('#pixel-board');
let colors = document.getElementsByClassName('color');
let colorSelected = document.querySelectorAll('.color');
let selected = document.querySelector('.selected');
let pixels = document.getElementsByClassName('pixel');
let send = document.getElementById('generate-board');
let number = 5;
let color = '';

let colorRandom1 = parseInt((Math.random() * 255) + 1);
let colorRandom2 = parseInt((Math.random() * 255) + 1);
let colorRandom3 = parseInt((Math.random() * 255) + 1);
let colorRandom4 = parseInt((Math.random() * 255) + 1);
let colorRandom5 = parseInt((Math.random() * 255) + 1);
let colorRandom6 = parseInt((Math.random() * 255) + 1);
let colorRandom7 = parseInt((Math.random() * 255) + 1);
let colorRandom8 = parseInt((Math.random() * 255) + 1);
let colorRandom9 = parseInt((Math.random() * 255) + 1);

let color1 = 'rgb(' + colorRandom1 + ',' + colorRandom2 + ',' + colorRandom3 + ')';

let color2 = 'rgb(' + colorRandom4 + ',' + colorRandom5 + ',' + colorRandom6 + ')';

let color3 = 'rgb(' + colorRandom7 + ',' + colorRandom8 + ',' + colorRandom9 + ')';

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

makeTable(number);

let code = 0;

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener("click", function() {
    document.getElementsByClassName('selected')[0].className = 'color';
    colors[i].className = 'color selected';
    code = i;
  })
}

send.onclick = function() {
  let newSize = document.getElementById('board-size').value;
  if (newSize === '') {
    window.alert("Board inválido!")
  }
  
  if (newSize < 5) {
    number = 5;
  } else if (newSize > 50) {
    number = 50;
  } else {
    number = newSize
  }

  for (let i = 0; i < paitingPixels.children.length; i = 0) {
    paitingPixels.removeChild(paitingPixels.children[0]);
  }
  makeTable(number);

}

function selectColor(cor) {
  document.querySelector('.selected').classList.remove("selected");
  cor.target.classList.add('selected');
}

for (let i = 0; i < document.querySelectorAll('.pixel').length; i += 1) {
  document.querySelectorAll('.pixel')[i].addEventListener('click', function(evento) {
    if (code === 0) {
      color = 'black';
    } else if (code === 1) {
      color = color1;
    } else if (code === 2) {
      color = color2;
    } else if (code === 3) {
      color = color3;
    }
    evento.target.style.backgroundColor = color;
  });
}

window.onload = function () {
  let btn = document.getElementById('clear-board');

  btn.addEventListener('click', function() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

document.getElementsByClassName('color')[1].style.backgroundColor = color1;
document.getElementsByClassName('color')[2].style.backgroundColor = color2;
document.getElementsByClassName('color')[3].style.backgroundColor = color3;

