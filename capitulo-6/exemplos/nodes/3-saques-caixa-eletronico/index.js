const prompt = require('prompt-sync')() // adiciona pacote para ler entrada do usuário

console.log(`Informe o valor dos saques ou 0 para sair`)

const saques = []

do {
  const saque = Number(prompt('Saque R$: '))

  if (saque == 0) {
    break
  }

  saques.push(saque)

  if (saque % 10 == 0) {
    console.log(`Saque realizado com sucesso`)
  } else {
    console.log(`Erro... Valor Inválido (deve ser múltiplo de 10)`)
  }
} while (true)

console.log("-".repeat(50))
console.log(`Saques válidos:`)
console.log("-".repeat(50))

const saquesValidos = saques.filter(function (saque) {
  return saque % 10 == 0
})

for (const saque of saquesValidos) {
  console.log(saque.toFixed(2))
}

console.log("\n\n" + "-".repeat(50))

const totalSacado = saquesValidos.reduce(function (total, saque) {
  return total + saque
}, 0)

console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`)
console.log("-".repeat(50))

const saquesInvalidos = saques.length - saquesValidos.length
console.log(`Nº de Tentativas de Saques inválidos: ${saquesInvalidos}`)
console.log("-".repeat(50))
