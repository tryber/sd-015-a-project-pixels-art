const black =document.getElementById('black');
const blue =document.getElementById('blue');
const red =document.getElementById('red');
const green =document.getElementById('green');

for (let i =0;i<25;i+=1)
{
    const coresPai = document.getElementById('pixel-board');
    const cores= document.createElement('div');
    cores.className='pixel';
    coresPai.appendChild(cores);
}


function selected(event)
{
    const corSelecionada =document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
    
}
black.addEventListener('click',selected);
blue.addEventListener('click',selected);
red.addEventListener('click',selected);
green.addEventListener('click',selected);