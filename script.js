let cores = ['black', 'blue', 'green', 'purple'];

for (index = 0; index < cores.length; index += 1) {
  let motherPalette = document.createElement('div');
  let divPalette = document.querySelector('#color-palette').appendChild(motherPalette);

  divPalette.className = 'color';
  divPalette.style.backgroundColor = cores[index];
  // divPalette.innerHTML = cores[index];
  
  if (cores[index] === 'black'){
    divPalette.classList.add('selected')
  }
  
}

let colorSelection = document.querySelector('#color-palette')
colorSelection.addEventListener('click', changeSelected)

function changeSelected (div) {
  let listaDeDivs = document.getElementsByClassName('color')
  // console.log(listaDeDivs)

  for (let idx2 = 0; idx2 < listaDeDivs.length; idx2 +=1){

    listaDeDivs[idx2].classList.remove('selected')
  }
  
  div.target.classList.add('selected')
  

  // colorSelection.addEventListener('mouseover', atual)
  // function atual() {
  //   let listaDeDivs2 = document.getElementsByClassName('color')


  //   listaDeDivs2[2].classList.add('selected')
  // }
  
  console.log(colorSelection)
}


for (idx = 0; idx < 5; idx += 1) {
  let motherPixel = document.createElement('div');
  let eachPixel = document
    .querySelector('#pixel-board')
    .appendChild(motherPixel);
  eachPixel.innerHTML = '';
  eachPixel.className = 'pixel';
  eachPixel.style.backgroundColor = 'white';

  for (idx2 = 0; idx2 < 4; idx2 += 1) {
    let motherPixel2 = document.createElement('div');
    let eachPixel2 = document
      .querySelector('#pixel-board')
      .appendChild(motherPixel2);
    eachPixel2.innerHTML = '';
    eachPixel2.className = 'pixel';
    eachPixel2.style.backgroundColor = 'white';
  }
}

// evento de click remove classe selected - verificação feita na #color-palette
// evento de click adiciona classe selected na div clicada

