// divPallet.innerHTML = 'divtext'

let cores = ['brown', 'blue', 'green', 'purple']

for (index = 0; index < cores.length; index +=1){
  let section1 = document.createElement('div')
  let divPallet = document.querySelector('#color-palette').appendChild(section1)
  divPallet.className = 'color' 
  divPallet.style.backgroundColor = cores[index]
  divPallet.innerHTML = cores[index]
}