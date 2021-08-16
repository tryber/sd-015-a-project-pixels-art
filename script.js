
 function criaDiv(tamanho) {
  let chamaSection = document.querySelector('.tabela');
  for (let i = 0; i < tamanho; i += 1) {
    for (let linha = 0; linha < tamanho; linha += 1) {
      let criaDiv = document.createElement('div');
    criaDiv.classList.add('pixel', 'line');
    criaDiv.id = 'pixel-board';
    chamaSection.appendChild(criaDiv);
    } 
  }
}
 criaDiv(5); 

