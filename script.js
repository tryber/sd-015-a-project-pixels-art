function criaCoresPaleta() {
  const coresCor = ['black', 'red', 'blue', 'green'];
  const coreslista = document.querySelector('#color-palette');
  for (let index = 0; index < coresCor.length; index += 1) {
    const cores = coresCor[index];
    const coresItem = document.createElement('div');
    coresItem.className = 'color';
    coresItem.style.background = cores;
    coreslista.appendChild(coresItem);
  }
}
criaCoresPaleta();
