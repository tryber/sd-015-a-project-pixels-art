const corInicial = document.querySelector('.color');
corInicial.className = 'color selected';
corInicial.style.backgroundColor = '#000000';

const divs = document.querySelectorAll('.color');
for (let i = 0; i < divs.length; i += 1) {
  if (divs[i] === divs[0]) {
    divs[i].style.backgroundColor = '#000000';
  } else if (divs[i] === divs[1]) {
    divs[i].style.backgroundColor = '#ef233c';
  } else if (divs[i] === divs[2]) {
    divs[i].style.backgroundColor = '#9ae19d';
  } else if (divs[i] === divs[3]) {
    divs[i].style.backgroundColor = '#564d80';
  }
}

const pixelsId = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {
  const pixels = document.createElement('li');
  pixels.classList = 'pixel';
  pixels.style.backgroundColor = 'white';
  pixelsId.appendChild(pixels);
}

function clicaCor(event) {
  let coresSelecionadas = document.querySelectorAll('.color');
  for(let i = 0; i < coresSelecionadas.length; i += 1) {
    coresSelecionadas[i].addEventListener('click',function(event) {
      let classeSelected = document.querySelector('.selected');
      classeSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
clicaCor();
