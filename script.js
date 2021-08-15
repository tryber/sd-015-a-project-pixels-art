// cores que vou usar : "#B105F5", "#DC07DE", "#FA0886", "#6607DE", 

  function criarDivs() {
    let paletaDeCores = document.getElementById('color-palette');

    for (let i = 0; i <= 3; i+= 1) {
      let filho = document.createElement('div')
      filho.className = "color";
      paletaDeCores.appendChild(filho);
    }
  };

  criarDivs();

  function coresPadrao() {
    const divs = document.querySelectorAll(".color");
    const cores = ["#B105F5", "#DC07DE", "#FA0886", "#6607DE"];

      for (let index = 0; index < divs.length; index+= 1) {
        let divAtual = divs[index];
        divAtual.style.backgroundColor = cores[index];
        divs[index].className += ' box';
        
      }
  }

  coresPadrao()
  