const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const valorPago = Number(form.inValor.value)

  let trocoDe30min = (valorPago - 1).toFixed(2)
  let trocoDe60min = (valorPago - 1.75).toFixed(2)
  let trocoDe120min = (valorPago - 3).toFixed(2)

  if (valorPago >= 1 && valorPago < 1.75) {
    h2.innerText = `Tempo: 30min`;
    h3.innerText = `Troco: ${trocoDe30min}`;
  } else if (valorPago >= 1.75 && valorPago < 3) {
    h2.innerText = `Tempo: 60min`;
    h3.innerText = `Troco: ${trocoDe60min}`;
  } else {
    h2.innerText = `Tempo: 120min`;
    h3.innerText = `Troco: ${trocoDe120min}`;
  }
})
