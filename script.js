for (let index = 0; index < 4; index += 1) {
    let paletaCores = document.createElement("div");
    paletaCores.id = "color-palette";
    paletaCores.className = "color";

    if (index === 0) {
        paletaCores.style.backgroundColor = "green";
    }
    
    if (index === 1) {
        paletaCores.style.backgroundColor = "red"; 
    }
        
    if (index === 2) {
        paletaCores.style.backgroundColor = "blue";
    }   
    
    if (index === 3) {
        paletaCores.style.backgroundColor = "yellow";
    }
    document.body.appendChild(paletaCores);   
}
