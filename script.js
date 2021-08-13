/* eslint-disable*/

const newPalletBlock = (location, qttOfBlocks) => {
  
  for(let count = 0; count < qttOfBlocks; count += 1){
    location.appendChild(document.createElement('div'));
  }
  const palletBlock = document.querySelectorAll('#color-palette div')
  newSelector([0, 1, 2, 3], palletBlock, 'class', 'color')
}

const newSelector = (array, element, selector, selectorName) => {
  if(Array.isArray(array)){
    for (let index = 0; index < array.length; index += 1) {
      switch (selector) {
        case 'id':
          element[array[index]].setAttribute(selector, selectorName); 
          break;
  
        case 'class':
          element[array[index]].classList.add(selectorName);
          break;
  
        default:
          return 0;
          break;
      } 
    }
  }else{
    switch (selector) {
      case 'id':
        element.setAttribute(selector, selectorName); 
        break;

      case 'class':
        element.classList.add(selectorName);
        break;
      default:
        return 0;
        break;
    }
  }
}

// const createNewElement = (element, elementContent, location) => {
//   if(Array.isArray(elementContent)){
//     for (let index = 0; index < elementContent.length; index += 1) {
//       const content = elementContent[index];
//       const newElement = document.createElement(element);
//       newElement.innerHTML = content;
//       location.appendChild(newElement);
//     }
//   }else{
//     const newElement = document.createElement(element);
//     newElement.innerHTML = elementContent;
//     location.appendChild(newElement);
//   }
// }

const sectionPalletCollor = document.getElementById('color-palette');
newPalletBlock(sectionPalletCollor, 4)