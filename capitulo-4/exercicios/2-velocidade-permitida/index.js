const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const velocidadePermitida = Number(form.inVelocidadePermitida.value)
  const velocidadeCondutor = Number(form.inVelocidadeCondutor.value)

  if (velocidadeCondutor <= velocidadePermitida) {
    h2.innerText = `Sem multas`
    return
  }

  const velocidadePermitida20Percent = velocidadePermitida * 0.2

  if (velocidadeCondutor <= (velocidadePermitida + velocidadePermitida20Percent)) {
    h2.innerText = `Multa Leve`
    return
  }

  h2.innerText = `Multa Grave`
})
