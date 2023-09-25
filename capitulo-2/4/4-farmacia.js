const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

form.addEventListener("submit", function(event) {
  const medicamento = form.inMedicamento.value
  const preco = Number(form.inPreco.value)

  const precoSemCentavos = Math.floor(preco)
  const totalSemCentavos = precoSemCentavos * 2

  h2.innerText = `Promoção de ${medicamento}`
  h3.innerText = `Leve 2 por apenas ${totalSemCentavos.toFixed(2)}`
  event.preventDefault()
})
