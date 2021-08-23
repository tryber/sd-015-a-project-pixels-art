const tamanho = 6;
let asterisco = '';

for (let i = 0; i < tamanho; i += 1) {
  for(let j = 0; j < tamanho; j += 1) {
    asterisco += '*';
  }asterisco+='\n';
}

console.log(asterisco);