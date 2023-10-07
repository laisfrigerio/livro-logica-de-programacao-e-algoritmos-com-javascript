const prompt = require('prompt-sync')() // adiciona pacote para ler entrada do usuário

const produto = prompt('Produto: ') // Lê o nome do produto
const numero = Number(prompt('Nº de Etiquetas: ')) // Lê a quantidade de etiquetas

// Cria um laço de repetição até numero/2 (pois imprime 2 etiquetas por linha)
for (let i = 0; i < numero / 2; i++) {
  console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}

if (numero % 2 == 1) { // se a quantidade solicitada for ímpar
  console.log(produto) // imprime uma etiqueta adicional
}
