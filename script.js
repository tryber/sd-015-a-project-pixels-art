// Requesito 7
const selectSection = document.querySelector('#color-palette');

selectSection.addEventListener('click', (event) => {
  if (event.target.className.includes('color')) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
});

// Requesito 8
const selectMain = document.querySelector('#pixel-board');
selectMain.addEventListener('click', (event) => {
  const selected = document.querySelector('.selected');
  const color = window.getComputedStyle(selected).getPropertyValue('background-color');
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = color;
  }
});

// Requesito 9
const creatButton = document.createElement('button');
creatButton.id = 'clear-board';
creatButton.innerHTML = 'Limpar';
creatButton.style.marginTop = '40px';
const selectDiv = document.querySelector('#creatButton');
selectDiv.appendChild(creatButton);

creatButton.addEventListener('click', (event) => {
  const selectPixel = document.querySelectorAll('#pixel-board .pixel');
  for (let i = 0; i < selectPixel.length; i++) {
    const clearButton = selectPixel[i];
    clearButton.style.backgroundColor = 'white';
  }
});
