const form = document.querySelector("form")
const pre = document.querySelector("pre")

const criancas = []

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const nome = form.inNome.value
  const idade = Number(form.inIdade.value)

  criancas.push({ nome, idade })
  
  form.inNome.value = ""
  form.inIdade.value = ""
  form.inNome.focus()

  // dispara um evento de click em btnListar (equivale a um click no botão da página)
  form.btnListar.dispatchEvent(new Event("click"))
})

form.btnListar.addEventListener("click", function() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista")
    return
  }

  let lista = ""

  for (const crianca of criancas) {
    const { nome, idade } = crianca
    lista += `${nome} - ${idade} anos\n`
  }

  pre.innerText = lista
})

form.btnResumir.addEventListener("click", function() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista")
    return
  }

  const copia = [...criancas] // cria cópia do vetor crianças
  copia.sort(function (a, b) {
    return a.idade - b.idade // ordena pela idade
  })

  let resumo = ""
  let aux = copia[0].idade // menor idade do vetor ordenado
  let nomes = [] // para inserir os nomes de cada idade

  for (const crianca of copia) {
    const { nome, idade } = crianca

    if (idade == aux) { // se é a mesma idade auxiliar...
      nomes.push(nome)
    } else {
      resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
      resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
      resumo += `(${nomes.join(", ")})\n\n`
      aux = idade // atualiza a idade auxiliar
      nomes = [] // inicia um novo vetor de nomes
      nomes.push(nome) // adiciona o primeiro da nova idade
    }
  }

  // adiciona a última criança
  resumo += `${aux} ano(s): ${nomes.length} criança(s) - `
  resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
  resumo += `(${nomes.join(", ")})\n\n`

  pre.innerText = resumo
})
