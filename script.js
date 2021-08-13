const h1 = document.createElement('h1');
const sectionCollorPalette = document.createElement('section');
sectionCollorPalette.id = 'color-palette';

function bodyChildren(elemento) { 
  document.body.appendChild(elemento);
}

h1.innerText = 'Paleta de Cores';
h1.id = 'title';

for (let i = 0; i < 4; i += 1) {
  let element = document.createElement('div');
  sectionCollorPalette.appendChild(element);
  element.className = 'color';
}

bodyChildren(h1);
bodyChildren(sectionCollorPalette);
