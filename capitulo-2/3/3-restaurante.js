const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  const quilo = Number(form.inQuilo.value)
  const consumo = Number(form.inConsumo.value)

  const quiloParaGramas = quilo / 1000
  const totalAPagar = quiloParaGramas * consumo

  h2.innerText = `Valor a pagar: ${totalAPagar.toFixed(2)}`
  event.preventDefault()
})
