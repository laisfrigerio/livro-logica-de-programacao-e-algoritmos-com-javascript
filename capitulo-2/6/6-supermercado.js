const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

form.addEventListener("submit", function(event) {
  const produto = form.inProduto.value
  const preco = Number(form.inPreco.value)

  const totalTerceiroProduto = (preco / 2)
  const total = (preco * 2) + totalTerceiroProduto

  h2.innerText = `${produto} - Promoção: Leve 3 por R$ ${total.toFixed(2)}`
  h3.innerText = `O Terceiro produto custa apenas ${totalTerceiroProduto.toFixed(2)}`

  event.preventDefault()
})
