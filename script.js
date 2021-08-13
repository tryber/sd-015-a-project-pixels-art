//Exercício 2 e 3- Gerador de 'divs' com background color igual ao da cor escolhida//

//Função de criação de divs com cores.
function divGenerator(e) {
  let colorPallete = document.getElementById('color-palette');

  let newDiv = document.createElement('div');
  newDiv.className = 'color'
  newDiv.id = e;
  newDiv.style.backgroundColor = e;
  colorPallete.appendChild(newDiv);
}
//Aplicação da função 'divGenerator' para criar as divs com cores, sendo a primeira 'preto' e proibindo a criação de 'div's com a cor 'branco'//
let arreyPalette = ['black', 'red', 'green', 'blue', 'yellow', 'purple','brown'];
for(let index = 0; index < arreyPalette.length; index += 1) {
  if(arreyPalette[index] !== 'white') {
    divGenerator(arreyPalette[index]);  
  }
}
