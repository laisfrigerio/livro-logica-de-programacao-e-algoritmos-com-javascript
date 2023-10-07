const form = document.querySelector("form")
const pre = document.querySelector("pre")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)
  let resposta = ""

  for (let i = 1; i <= 10; i++) {
    resposta += `${numero} x ${i} = ${numero * i}\n`
  }

  pre.innerText = resposta
})
