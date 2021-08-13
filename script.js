const div = document.createElement("div");
div.className = 'pixel';

let divs = 5;

let fatherDiv = document.getElementById("pixel-board");

for (let i = 0; i < divs; i += 1){
    for (let index = 0; index < divs; index += 1){  
        let div = document.createElement('div');
        div.className = 'pixel';
        fatherDiv.appendChild(div);
    }
    let quebra = document.createElement('br');
    fatherDiv.appendChild(quebra);
}



        
    
