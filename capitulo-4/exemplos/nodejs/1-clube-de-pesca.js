// adiciona pacote para ler entrada do usuário
const prompt = require('prompt-sync')();

const pessoas = Number(prompt('Número de Pessoas: '));
const peixes = Number(prompt('Número de Peixes: '));

let pagar
if (peixes <= pessoas) { // condição definida no exemplo
  pagar = pessoas * 20
} else {
  pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`) // exibe o valor a ser pago