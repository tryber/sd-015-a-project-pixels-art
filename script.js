// Deve se ter um evento click com algum tipo de armazenamento em uma variavel com a cor atual da palheta, o preto ja está,desde o inicio, selecionado, se clicar em um quadrado fora da palheta irá pinta-lo caso clique em outra palheta irá substituir a cor selecionada

//variáveis Iniciais

let cores = (document.getElementsByClassName('color'));

let tabela = (document.getElementsByClassName('pixel'));


//codigo BRUTO

cores[0].onclick = function(){
    let selected = window.getComputedStyle(cores[0]).getPropertyValue('background-color')
    tabela[0].onclick = function(){
        tabela[0].style.backgroundColor = selected
    }
    tabela[1].onclick = function(){
        tabela[1].style.backgroundColor = selected
    }
    tabela[2].onclick = function(){
        tabela[2].style.backgroundColor = selected
    }
    tabela[3].onclick = function(){
        tabela[3].style.backgroundColor = selected
    }
    tabela[4].onclick = function(){
        tabela[4].style.backgroundColor = selected
    }
    tabela[5].onclick = function(){
        tabela[5].style.backgroundColor = selected
    }
    tabela[6].onclick = function(){
        tabela[6].style.backgroundColor = selected
    }
    tabela[7].onclick = function(){
        tabela[7].style.backgroundColor = selected
    }
    tabela[8].onclick = function(){
        tabela[8].style.backgroundColor = selected
    }
    tabela[9].onclick = function(){
        tabela[9].style.backgroundColor = selected
    }
    tabela[10].onclick = function(){
        tabela[10].style.backgroundColor = selected
    }
    tabela[11].onclick = function(){
        tabela[11].style.backgroundColor = selected
    }
    tabela[12].onclick = function(){
        tabela[12].style.backgroundColor = selected
    }
    tabela[13].onclick = function(){
        tabela[13].style.backgroundColor = selected
    }
    tabela[14].onclick = function(){
        tabela[14].style.backgroundColor = selected
    }
    tabela[15].onclick = function(){
        tabela[15].style.backgroundColor = selected
    }
    tabela[16].onclick = function(){
        tabela[16].style.backgroundColor = selected
    }
    tabela[17].onclick = function(){
        tabela[17].style.backgroundColor = selected
    }
    tabela[18].onclick = function(){
        tabela[18].style.backgroundColor = selected
    }
    tabela[19].onclick = function(){
        tabela[19].style.backgroundColor = selected
    }
    tabela[20].onclick = function(){
        tabela[20].style.backgroundColor = selected
    }
    tabela[21].onclick = function(){
        tabela[21].style.backgroundColor = selected
    }
    tabela[22].onclick = function(){
        tabela[22].style.backgroundColor = selected
    }
    tabela[23].onclick = function(){
        tabela[23].style.backgroundColor = selected
    }
    tabela[24].onclick = function(){
        tabela[24].style.backgroundColor = selected
    }
    //adiciona a classe 'selected'
    cores[3].classList.remove('selected')
    cores[0].classList.add('selected')
    cores[1].classList.remove('selected')
    cores[2].classList.remove('selected')


}
cores[1].onclick = function(){
    let selected = window.getComputedStyle(cores[1]).getPropertyValue('background-color')
    tabela[0].onclick = function(){
        tabela[0].style.backgroundColor = selected
    }
    tabela[1].onclick = function(){
        tabela[1].style.backgroundColor = selected
    }
    tabela[2].onclick = function(){
        tabela[2].style.backgroundColor = selected
    }
    tabela[3].onclick = function(){
        tabela[3].style.backgroundColor = selected
    }
    tabela[4].onclick = function(){
        tabela[4].style.backgroundColor = selected
    }
    tabela[5].onclick = function(){
        tabela[5].style.backgroundColor = selected
    }
    tabela[6].onclick = function(){
        tabela[6].style.backgroundColor = selected
    }
    tabela[7].onclick = function(){
        tabela[7].style.backgroundColor = selected
    }
    tabela[8].onclick = function(){
        tabela[8].style.backgroundColor = selected
    }
    tabela[9].onclick = function(){
        tabela[9].style.backgroundColor = selected
    }
    tabela[10].onclick = function(){
        tabela[10].style.backgroundColor = selected
    }
    tabela[11].onclick = function(){
        tabela[11].style.backgroundColor = selected
    }
    tabela[12].onclick = function(){
        tabela[12].style.backgroundColor = selected
    }
    tabela[13].onclick = function(){
        tabela[13].style.backgroundColor = selected
    }
    tabela[14].onclick = function(){
        tabela[14].style.backgroundColor = selected
    }
    tabela[15].onclick = function(){
        tabela[15].style.backgroundColor = selected
    }
    tabela[16].onclick = function(){
        tabela[16].style.backgroundColor = selected
    }
    tabela[17].onclick = function(){
        tabela[17].style.backgroundColor = selected
    }
    tabela[18].onclick = function(){
        tabela[18].style.backgroundColor = selected
    }
    tabela[19].onclick = function(){
        tabela[19].style.backgroundColor = selected
    }
    tabela[20].onclick = function(){
        tabela[20].style.backgroundColor = selected
    }
    tabela[21].onclick = function(){
        tabela[21].style.backgroundColor = selected
    }
    tabela[22].onclick = function(){
        tabela[22].style.backgroundColor = selected
    }
    tabela[23].onclick = function(){
        tabela[23].style.backgroundColor = selected
    }
    tabela[24].onclick = function(){
        tabela[24].style.backgroundColor = selected
    }
    //adicionar a classe 'selected
    cores[3].classList.remove('selected')
    cores[0].classList.remove('selected')
    cores[1].classList.add('selected')
    cores[2].classList.remove('selected')

}
cores[2].onclick = function(){
    let selected = window.getComputedStyle(cores[2]).getPropertyValue('background-color')
    tabela[0].onclick = function(){
        tabela[0].style.backgroundColor = selected
    }
    tabela[1].onclick = function(){
        tabela[1].style.backgroundColor = selected
    }
    tabela[2].onclick = function(){
        tabela[2].style.backgroundColor = selected
    }
    tabela[3].onclick = function(){
        tabela[3].style.backgroundColor = selected
    }
    tabela[4].onclick = function(){
        tabela[4].style.backgroundColor = selected
    }
    tabela[5].onclick = function(){
        tabela[5].style.backgroundColor = selected
    }
    tabela[6].onclick = function(){
        tabela[6].style.backgroundColor = selected
    }
    tabela[7].onclick = function(){
        tabela[7].style.backgroundColor = selected
    }
    tabela[8].onclick = function(){
        tabela[8].style.backgroundColor = selected
    }
    tabela[9].onclick = function(){
        tabela[9].style.backgroundColor = selected
    }
    tabela[10].onclick = function(){
        tabela[10].style.backgroundColor = selected
    }
    tabela[11].onclick = function(){
        tabela[11].style.backgroundColor = selected
    }
    tabela[12].onclick = function(){
        tabela[12].style.backgroundColor = selected
    }
    tabela[13].onclick = function(){
        tabela[13].style.backgroundColor = selected
    }
    tabela[14].onclick = function(){
        tabela[14].style.backgroundColor = selected
    }
    tabela[15].onclick = function(){
        tabela[15].style.backgroundColor = selected
    }
    tabela[16].onclick = function(){
        tabela[16].style.backgroundColor = selected
    }
    tabela[17].onclick = function(){
        tabela[17].style.backgroundColor = selected
    }
    tabela[18].onclick = function(){
        tabela[18].style.backgroundColor = selected
    }
    tabela[19].onclick = function(){
        tabela[19].style.backgroundColor = selected
    }
    tabela[20].onclick = function(){
        tabela[20].style.backgroundColor = selected
    }
    tabela[21].onclick = function(){
        tabela[21].style.backgroundColor = selected
    }
    tabela[22].onclick = function(){
        tabela[22].style.backgroundColor = selected
    }
    tabela[23].onclick = function(){
        tabela[23].style.backgroundColor = selected
    }
    tabela[24].onclick = function(){
        tabela[24].style.backgroundColor = selected
    }
    //adicionar a classe 'selected'
    cores[3].classList.remove('selected')
    cores[0].classList.remove('selected')
    cores[1].classList.remove('selected')
    cores[2].classList.add('selected')
}
cores[3].onclick = function(){
    let selected = window.getComputedStyle(cores[3]).getPropertyValue('background-color')
    tabela[0].onclick = function(){
        tabela[0].style.backgroundColor = selected
    }
    tabela[1].onclick = function(){
        tabela[1].style.backgroundColor = selected
    }
    tabela[2].onclick = function(){
        tabela[2].style.backgroundColor = selected
    }
    tabela[3].onclick = function(){
        tabela[3].style.backgroundColor = selected
    }
    tabela[4].onclick = function(){
        tabela[4].style.backgroundColor = selected
    }
    tabela[5].onclick = function(){
        tabela[5].style.backgroundColor = selected
    }
    tabela[6].onclick = function(){
        tabela[6].style.backgroundColor = selected
    }
    tabela[7].onclick = function(){
        tabela[7].style.backgroundColor = selected
    }
    tabela[8].onclick = function(){
        tabela[8].style.backgroundColor = selected
    }
    tabela[9].onclick = function(){
        tabela[9].style.backgroundColor = selected
    }
    tabela[10].onclick = function(){
        tabela[10].style.backgroundColor = selected
    }
    tabela[11].onclick = function(){
        tabela[11].style.backgroundColor = selected
    }
    tabela[12].onclick = function(){
        tabela[12].style.backgroundColor = selected
    }
    tabela[13].onclick = function(){
        tabela[13].style.backgroundColor = selected
    }
    tabela[14].onclick = function(){
        tabela[14].style.backgroundColor = selected
    }
    tabela[15].onclick = function(){
        tabela[15].style.backgroundColor = selected
    }
    tabela[16].onclick = function(){
        tabela[16].style.backgroundColor = selected
    }
    tabela[17].onclick = function(){
        tabela[17].style.backgroundColor = selected
    }
    tabela[18].onclick = function(){
        tabela[18].style.backgroundColor = selected
    }
    tabela[19].onclick = function(){
        tabela[19].style.backgroundColor = selected
    }
    tabela[20].onclick = function(){
        tabela[20].style.backgroundColor = selected
    }
    tabela[21].onclick = function(){
        tabela[21].style.backgroundColor = selected
    }
    tabela[22].onclick = function(){
        tabela[22].style.backgroundColor = selected
    }
    tabela[23].onclick = function(){
        tabela[23].style.backgroundColor = selected
    }
    tabela[24].onclick = function(){
        tabela[24].style.backgroundColor = selected
    }
    //adicionar a classe 'selected'
    cores[3].classList.add('selected')
    cores[0].classList.remove('selected')
    cores[1].classList.remove('selected')
    cores[2].classList.remove('selected')

}

let selected = window.getComputedStyle(cores[0]).getPropertyValue('background-color')
//adicionar a classe 'selected'
cores[0].classList.add('selected')
cores[3].classList.remove('selected')
cores[1].classList.remove('selected')
cores[2].classList.remove('selected')

tabela[0].onclick = function(){
    tabela[0].style.backgroundColor = selected
}
tabela[1].onclick = function(){
    tabela[1].style.backgroundColor = selected
}
tabela[2].onclick = function(){
    tabela[2].style.backgroundColor = selected
}
tabela[3].onclick = function(){
    tabela[3].style.backgroundColor = selected
}
tabela[4].onclick = function(){
    tabela[4].style.backgroundColor = selected
}
tabela[5].onclick = function(){
    tabela[5].style.backgroundColor = selected
}
tabela[6].onclick = function(){
    tabela[6].style.backgroundColor = selected
}
tabela[7].onclick = function(){
    tabela[7].style.backgroundColor = selected
}
tabela[8].onclick = function(){
    tabela[8].style.backgroundColor = selected
}
tabela[9].onclick = function(){
    tabela[9].style.backgroundColor = selected
}
tabela[10].onclick = function(){
    tabela[10].style.backgroundColor = selected
}
tabela[11].onclick = function(){
    tabela[11].style.backgroundColor = selected
}
tabela[12].onclick = function(){
    tabela[12].style.backgroundColor = selected
}
tabela[13].onclick = function(){
    tabela[13].style.backgroundColor = selected
}
tabela[14].onclick = function(){
    tabela[14].style.backgroundColor = selected
}
tabela[15].onclick = function(){
    tabela[15].style.backgroundColor = selected
}
tabela[16].onclick = function(){
    tabela[16].style.backgroundColor = selected
}
tabela[17].onclick = function(){
    tabela[17].style.backgroundColor = selected
}
tabela[18].onclick = function(){
    tabela[18].style.backgroundColor = selected
}
tabela[19].onclick = function(){
    tabela[19].style.backgroundColor = selected
}
tabela[20].onclick = function(){
    tabela[20].style.backgroundColor = selected
}
tabela[21].onclick = function(){
    tabela[21].style.backgroundColor = selected
}
tabela[22].onclick = function(){
    tabela[22].style.backgroundColor = selected
}
tabela[23].onclick = function(){
    tabela[23].style.backgroundColor = selected
}
tabela[24].onclick = function(){
    tabela[24].style.backgroundColor = selected
}
