const cont = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']; 
function criarQ () {
const divs = document.getElementById('pixel-board')
for (let i = 0; i < cont.length; i += 1) {
    let linha = cont[i];
    const div25 = document.createElement('div')
    div25.className = 'pixel'
    div25.innerHTML = linha
    divs.appendChild(div25)
}
}
criarQ()
