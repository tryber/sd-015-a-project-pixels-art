const quadro = document.querySelector('#pixel-board');

for (let index = 0; index < 5; index += 1) {
    for (let indice = 0; indice < 5; indice += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel'
        quadro.appendChild(pixel)
    }
}