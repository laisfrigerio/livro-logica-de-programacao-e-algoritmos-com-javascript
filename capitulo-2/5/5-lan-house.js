const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  const preco = Number(form.inPreco.value)
  const duracao = Number(form.inDuracao.value)

  const total = Math.ceil(duracao / 15) * preco

  h2.innerText = `Valor a pagar ${total.toFixed(2)}`
  event.preventDefault()
})
