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
        
        const colors = document.getElementsByClassName('pixel');
        
        for (let index = 0; index < colors.length; index += 1) {
            colors[index].addEventListener('click', changeColor)
        }
        
        function changeColor (event) {
    let getColor = document.querySelector('.selected');
    let background1 = window.getComputedStyle(getColor).getPropertyValue('background-color');
    event.target.style.backgroundColor = background1;
} 
let chamarEl = document.querySelector('#local-button')
let botao = document.createElement('button')
botao.id = 'clear-board'
botao.innerHTML = 'Limpar'
chamarEl.appendChild(botao)

const button = document.getElementById('clear-board')
button.addEventListener('click', removeAll)

function removeAll () {
    let changeEl = document.querySelectorAll('.pixel')
    for (let i = 0; i < changeEl.length; i += 1) {
        changeEl[i].style.backgroundColor = 'white'
    }
}