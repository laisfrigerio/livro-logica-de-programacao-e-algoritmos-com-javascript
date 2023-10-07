const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)
  let resposta = `Entre ${numero} e 1:`

  for (let i = numero; i >= 1; i--) {
    resposta = ` ${resposta}${i},`
  }

  h2.innerText = resposta
})
