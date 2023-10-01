const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const numero = Number(form.inNumero.value)

  if (numero % 2 == 0) {
    h2.innerText = `${numero} é par`
  } else {
    h2.innerText = `${numero} é ímpar`
  }
})
