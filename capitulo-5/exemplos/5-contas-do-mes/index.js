const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""        // string com a resposta a ser exibida
let numeroContas = 0      // inicializa contador
let somaTotalContas = 0  // e acumulador (variáveis globais)

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const descricao = form.inDescricao.value
  const valor = Number(form.inValor.value)

  numeroContas++
  somaTotalContas = somaTotalContas + valor

  resposta = `${resposta}${descricao} - R$: ${valor.toFixed(2)}\n`

  resp1.innerText = `${resposta}-------------------------------------------------------------`
  resp2.innerText = `${numeroContas} Conta(s) - Total R$: ${somaTotalContas.toFixed(2)}`

  form.inDescricao.value = ""
  form.inValor.value = ""
  form.inDescricao.focus()
})
