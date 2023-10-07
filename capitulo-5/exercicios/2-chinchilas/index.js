const form = document.querySelector("form")
const pre = document.querySelector("pre")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const quantidade = Number(form.inQuantidade.value)
  const anos = Number(form.inAnos.value)

  if (quantidade < 1) {
    pre.innerText = "Não há chinchilas suficientes para reprodução"
    return
  }

  let acumulador = quantidade
  let resposta = `1º Ano: ${acumulador} Chinchilas\n`

  for (let i = 2; i <= anos; i++) {
    acumulador = acumulador * 3
    resposta += `${i}º Ano: ${acumulador} Chinchilas\n`
  }

  pre.innerText = resposta
})
