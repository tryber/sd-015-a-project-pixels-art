document.getElementById('black-color').style.backgroundColor = 'black'
document.getElementById('red-color').style.backgroundColor = 'red'
document.getElementById('blue-color').style.backgroundColor = 'blue'
document.getElementById('green-color').style.backgroundColor = 'green'

const accessBlack = document.getElementById('black-color')
const accessRed = document.getElementById('red-color')
const acessBlue = document.getElementById('blue-color')
const accessGreen = document.getElementById('green-color')

function changeClass (change) {
  const accessClassSelected = document.querySelector('.selected') 
  accessClassSelected.classList.remove('selected')
  change.target.classList.add('selected')
}

accessBlack.addEventListener('click', changeClass)
accessRed.addEventListener('click', changeClass)
acessBlue.addEventListener('click', changeClass)
accessGreen.addEventListener('click', changeClass)
