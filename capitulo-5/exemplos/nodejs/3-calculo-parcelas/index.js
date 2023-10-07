const prompt = require('prompt-sync')() // adiciona pacote para ler entrada do usuário

const valor = Number(prompt('Valor R$: '))           // Lê o valor da conta
const parcelas = Number(prompt('Nº de Parcelas: '))  // Lê o número de parcelas

const valorParcela = Math.floor(valor / parcelas)    // cálculo do valor da parcela sem decimais
const valorFinal = valorParcela + (valor % parcelas) // cálculo do valor da última parcela

for (let i = 1; i < parcelas; i++) {
  console.log(`${i} parcela: R$ ${valorParcela.toFixed(2)}`)
}

console.log(`${parcelas} parcela: R$ ${valorFinal.toFixed(2)}`) // ultima parcela