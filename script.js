function criarCoresAleatorias() { 
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const corCompleta = `rgb(${red}, ${green}, ${blue})`;
  return corCompleta;
}

