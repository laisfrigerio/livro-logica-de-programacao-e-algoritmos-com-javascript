const prompt = require('prompt-sync')(); // adiciona pacote para ler entrada do usuário

const numero = Number(prompt('Número (centena): '));

if (numero < 100 || numero > 999) {
  console.log('Número não é uma centena')
  return
}

const num1 = Math.floor(numero / 100) // obtém o primeiro número
const sobra  = numero % 100 // obtém o que sobra (dezena)

const num2 = Math.floor(sobra / 10) // obtém o segundo número
const num3 = sobra % 10 // obtém o terceiro número

console.log(`Invertido: ${num3}${num2}${num1}`) // exibe o valor a ser pago