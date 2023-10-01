const prompt = require('prompt-sync')(); // adiciona pacote para ler entrada do usuário

const valorCompra = Number(prompt('Valor da compa R$: '));
const aux = Math.floor(valorCompra / 20) // número de parcela sem condições

let parcelas

if (aux == 0) {
  parcelas = 1
} else if (aux > 6) {
  parcelas = 6
} else {
  parcelas = aux
}

const valorParcela = valorCompra / parcelas // cálculo do valor da parcela

// const parcelas = aux == 0 ? 1 : (aux > 6) ? 6 : aux

console.log(`Pode pagar em: ${parcelas}x de R$: ${valorParcela.toFixed(2)}`) // exibe o valor a ser pago