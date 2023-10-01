const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const numero = Number(form.inNumero.value)
  const raizQuadrada = Math.sqrt(numero) // calcula a raiz quadrada do número

  if (Number.isInteger(raizQuadrada)) { // se valor da raiz for um número inteiro
    h2.innerText = `Raiz ${raizQuadrada}`
  } else { // senão
    h2.innerText = `Não há raiz exata para ${numero}`
  }
})
