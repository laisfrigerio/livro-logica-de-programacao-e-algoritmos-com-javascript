const prompt = require('prompt-sync')() // adiciona pacote para ler entrada do usuário

console.log(`Informe os alunos. Após, digite "Fim" no nome para sair`)

const alunos = []

do {
  const nome = prompt('Nome: ')

  if (nome == "Fim") {
    break
  }

  const nota = Number(prompt('Nota: '))
  alunos.push({ nome, nota })

  console.log(`Ok! Aluno(a) cadastro(a)...`)
} while (true)

console.log("-".repeat(40))

const maior = alunos.reduce(function (acumulador, aluno) {
  return Math.max(acumulador, aluno.nota)
}, 0)

console.log(`Maior nota: ${maior}`)

if (maior >= 7) {
  const destaques = alunos.filter(function (aluno) {
    return aluno.nota == maior
  })

  for (const destaque of destaques) {
    console.log(`- ${destaque.nome}`)
  }
} else { 
  console.log(`Não há alunos em destaque na turma`)
}
