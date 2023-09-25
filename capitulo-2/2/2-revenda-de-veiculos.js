const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
const h4 = document.querySelector("h4")

form.addEventListener("submit", function(event) {
  const veiculo = form.inVeiculo.value
  const preco = Number(form.inPreco.value)
  const entrada = preco / 2
  const parcelado12Vezes = (preco - entrada) / 12
  h2.innerText = `Promoção: ${veiculo}`
  h3.innerText = `Entrada de R$: ${entrada.toFixed(2)}` // toFixed(2) limita a 2 casas decimais
  h4.innerText = `+ 12x de R$: ${parcelado12Vezes.toFixed(2)}`
  event.preventDefault()
})
