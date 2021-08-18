function criarCoresAleatorias() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const corCompleta = `rgb(${red}, ${green}, ${blue})`;
  return corCompleta;
}

for (let i = 0; i < 25; i += 1) {
  const wh = document.createElement('cor');
  wh.className = 'pixel';
  document.getElementById('pixel-board').appendChild(wh);
}

window.onload = function () {
  const quadsBrancos = document.getElementsByClassName('pixel');
  quadsBrancos.addEventListener('click', (pintaPreto) {
  
  
};
