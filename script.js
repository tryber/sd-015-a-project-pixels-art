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
    const cores = ["#000000", "#DC07DE", "#FA0886", "#6607DE"];

      for (let index = 0; index < divs.length; index+= 1) {
        let divAtual = divs[index];
        divAtual.style.backgroundColor = cores[index];
        divs[index].className += ' box';
      }
  }

  coresPadrao()

  function criarPixels() {
    let paletaDeCores = document.getElementById('pixel-board');

    for (let i = 0; i < 25; i+= 1) {
      let filho = document.createElement('div')
      filho.classList.add('pixel')
      paletaDeCores.appendChild(filho);
    }
  };

  criarPixels()

  // function criarLinhas() {
  //   let paletaLis = document.querySelectorAll('#pixel-board div')
  //   for (let index = 0; index < paletaLis.length; index +=1) {
  //     let posicaoAtual = paletaLis[index]
  //     if (index == 4) {
  //       posicaoAtual.classList.add('pixel');
  //     }
  //   }
  // };