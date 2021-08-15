let selected = document.querySelector('.color');
selected.classList.add('selected');

let section1 = document.querySelectorAll('.color');
 for ( let index =1; index < section1.length; index +=1 )
  section1[index].addEventListener('click',  function(){
    let retira = document.querySelector('.selected')
    retira.classList.remove('selected')  
    section1[index].classList.add('selected')  
 } )


  //function changeSelected(){
    //let retira = document.querySelector('.selected')
    //retira.classList.remove('selected')    
 //}

 //requisito 8

