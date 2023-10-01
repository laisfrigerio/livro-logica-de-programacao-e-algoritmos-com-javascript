const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  const bairro = form.inBairro.value

  let taxaEntrega // declara a variável peso

  switch (bairro) {
    case "Centro":
      taxaEntrega = 5.00
      break
    case "Fragata":
    case "Três Vendas":
      taxaEntrega = 7.00
      break
    case "Laranjal":
      taxaEntrega = 10.00
      break
    default:
      taxaEntrega = 8.00
  }

  h2.innerText = `Taxa R$: ${taxaEntrega.toFixed(2)}`
  event.preventDefault()
})
