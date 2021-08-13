let divs = document.querySelectorAll('.color')
for (let i = 0; i < divs.length; i += 1){
    if (divs[i] === divs[0]) {
        divs[i].style.backgroundColor = '#000000';
    } else if(divs[i] === divs[1]) {
        divs[i].style.backgroundColor = '#ef233c';
    } else if(divs[i] === divs[2]) {
        divs[i].style.backgroundColor = '#9ae19d';
    } else if(divs[i] === divs[3]) {
        divs[i].style.backgroundColor = '#564d80';
    }
}



