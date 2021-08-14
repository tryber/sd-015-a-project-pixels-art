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

let coresQ = document.querySelector('.color');
coresQ.classList.add('selected')

const cores1 = document.querySelectorAll('.color')
    for (let index = 0; index < cores1.length; index += 1) {
        cores1[index].addEventListener('click', setColor)
    } 

        function setColor(event) {
            let primQ = document.querySelector('.selected')
            primQ.classList.remove('selected')
            event.target.classList.add('selected')


        }
