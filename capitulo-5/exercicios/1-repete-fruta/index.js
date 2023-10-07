const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const fruta = form.inNome.value
  const numero = Number(form.inNumero.value)
  let resposta = ""

  for (let i = 1; i < numero; i++) {
    resposta += `${fruta} * `
  }

  resposta = resposta + fruta
  h2.innerText = resposta
})
