  let coresDaPaleta = document.getElementsByClassName("color")
  console.log(coresDaPaleta)
  for (i=0; i < coresDaPaleta.length; i += 1) {
    coresDaPaleta[i].style.backgroundColor = coresDaPaleta[i].id;
  }