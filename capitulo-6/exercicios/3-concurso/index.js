const form = document.querySelector("form")
const pre = document.querySelector("pre")

const candidatos = []

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const nome = form.inCandidato.value
  const acertos = Number(form.inAcertos.value)

  if (isNaN(acertos)) {
    alert('Digite um número de acertos válido !')
    return
  }

  candidatos.push({ nome, acertos })

  form.inCandidato.value = "" 
  form.inAcertos.value = "" 
  form.inCandidato.focus()
  form.btnListar.dispatchEvent(new Event("click"))
})

form.btnListar.addEventListener("click", function() {
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista...")
    form.inCandidato.focus()
    return
  }

  let lista = ""

  for (const candidato of candidatos) {
    const { nome, acertos } = candidato
    lista += `${nome} - ${acertos} acertos\n`
  }

  pre.innerText = lista
  form.inCandidato.value = "" 
  form.inAcertos.value = "" 
  form.inCandidato.focus()
})

form.btnAprovados.addEventListener("click", function() {
  const quantidade = Number(prompt("Número de Acertos para Aprovação: "))

  const aprovados = candidatos.filter(function (candidato) {
    return candidato.acertos >= quantidade
  })

  let lista = ""

  for (const candidatoAprovado of aprovados) {
    const { nome, acertos } = candidatoAprovado
    lista += `${nome} - ${acertos} acertos\n`
  }

  pre.innerText = lista
  form.inCandidato.value = "" 
  form.inAcertos.value = "" 
  form.inCandidato.focus()
})