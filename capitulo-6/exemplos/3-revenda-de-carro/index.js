const form = document.querySelector("form")
const pre = document.querySelector("pre")

const carros = []

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const modelo = form.inModelo.value
  const preco = Number(form.inPreco.value)

  carros.push({ modelo, preco })
  
  form.inModelo.value = ""
  form.inPreco.value = ""
  form.inModelo.focus()

  // dispara um evento de click em btnListar (equivale a um click no botão da página)
  form.btnListar.dispatchEvent(new Event("click"))
})

form.btnListar.addEventListener("click", function() {
  if (carros.length == 0) {
    alert("Não há carros na lista")
    return
  }

  const lista = carros.reduce(function (acumulador, carro) {
    return acumulador + `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }, "")

  pre.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

form.btnFiltrar.addEventListener("click", function() {
  const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

  if (maximo == 0 || isNaN(maximo)) { // se não informou ou valor inválido
    return
  }

  const carrosFilter = carros.filter(function (carro) {
    return carro.preco <= maximo
  })

  if (carrosFilter.length == 0) {
    alert("Não há carros com preço inferior ou igual ao solicitado")
    return
  }

  let lista = ""

  for (const carro of carrosFilter) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }

  pre.innerText = `Carros até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

form.btnSimular.addEventListener("click", function() {
  const desconto = Number(prompt("Qual o percentual de desconto: "))

  if (desconto == 0 || isNaN(desconto)) { // se não informou ou valor inválido
    return
  }

  const carrosDesc = carros.map(function (carro) {
    return {
      modelo: carro.modelo,
      preco: carro.preco - (carro.preco * (desconto / 100)),
    }
  })

  let lista = ""

  for (const carro of carrosDesc) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }

  pre.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})
