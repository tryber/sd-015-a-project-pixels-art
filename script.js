/* Consultado Repositório Leandro-Hespanhol link: https://github.com/tryber/sd-015-a-project-pixels-art/blob/00a7c8c3359db330ad4ee05dd695d8ae2e2d7609/script.js */





let cores = ['black', 'blue', 'green', 'purple'];  

for (index = 0; index < cores.length; index += 1) {  
  let motherPalette = document.createElement('div'); 
  let divPalette = document.querySelector('#color-palette').appendChild(motherPalette); 

  divPalette.className = 'color'; 
  divPalette.style.backgroundColor = cores[index]; 
  
  
  if (cores[index] === 'black'){   
    divPalette.classList.add('selected')
  } 
  
}

let colorSelection = document.querySelector('#color-palette')   
colorSelection.addEventListener('click', changeSelected) 

function changeSelected (div) {        
  let listaDeDivs = document.getElementsByClassName('color') 
  

  for (let idx2 = 0; idx2 < listaDeDivs.length; idx2 +=1){

    listaDeDivs[idx2].classList.remove('selected') 
  }
  
  div.target.classList.add('selected') 
  

  
}


for (idx = 0; idx < 25; idx += 1) {    
  let motherPixel = document.createElement('div');  
                           
                                                 
  let eachPixel = document           
    .querySelector('#pixel-board')  
    .appendChild(motherPixel);
  
  eachPixel.className = 'pixel'; 
  eachPixel.style.backgroundColor = 'white'; 

  
}

let quadro = document.querySelector('#pixel-board') 

quadro.addEventListener('click', colorir)                            

function colorir (quadrado) {                          
   quadrado.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor  

  }

  