const prompt = require('prompt-sync')() // adiciona pacote para ler entrada do usuário

console.log(`Informe os clientes em ordem de chegada ou "Fim" no nome para sair`)

const clientes = []

do {
  const nome = prompt('Nome: ')

  if (nome == "Fim") {
    break
  }

  const idade = Number(prompt('Idade: '))
  clientes.push({ nome, idade })

  console.log(`Ok! Cliente inserido(a) na fila...`)
} while (true)

console.log("-".repeat(40))
console.log("Fila Preferencial")
console.log("-".repeat(40))

const filaPreferencial = clientes.filter(function (cliente) {
  return cliente.idade >= 60
})

filaPreferencial.forEach(function (cliente, i) {
  console.log(`${i + 1} - ${cliente.nome}`)
})

console.log("\n" + "-".repeat(40))
console.log("Fila Normal")
console.log("-".repeat(40))

const filaNormal = clientes.filter(function (cliente) {
  return cliente.idade < 60
})

filaNormal.forEach(function (cliente, i) {
  console.log(`${i + 1} - ${cliente.nome}`)
})
