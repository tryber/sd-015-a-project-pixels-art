const black =document.getElementById('black');
const blue =document.getElementById('blue');
const red =document.getElementById('red');
const green =document.getElementById('green');
const pixel =document.querySelector('pixel');
const botao =document.getElementById('clear-board');


for (let i =0;i<25;i+=1)
{
    const coresPai = document.getElementById('pixel-board');
    const cores= document.createElement('div');
    cores.className='pixel';
    coresPai.appendChild(cores);
}
//window.onload = selected

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


function printarPixels (event)
{      
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
for (let i=0;i<25;i+=1){ 
document.querySelectorAll('.pixel')[i].addEventListener('click', printarPixels);
}
function button ()
{
    for (let i=0;i<25;i+=1)
    { 
        document.querySelectorAll('.pixel')[i].style.backgroundColor='white';
    } 
}
botao.addEventListener('click',button);