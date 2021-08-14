let linhaColuna = ["" , "" , "", "", "", "", "", "","","","","","","","","","","","","","","","","",""];
function makeQ(){
    let divs = document.getElementById("pixel-board")
    for (let i= 0; i  < linhaColuna.length; i += 1){
        let linha = linhaColuna[i];
        let div25 = document.createElement("div")
        div25.innerHTML = linha
        divs.appendChild(div25)
    }
}
makeQ()