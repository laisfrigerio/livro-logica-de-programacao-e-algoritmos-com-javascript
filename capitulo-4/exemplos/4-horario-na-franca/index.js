const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  const horarioBrasil = Number(form.inHoraBrasil.value)

  let horaFranca = horarioBrasil + 5 // cálcula o horário na França

  if (horaFranca > 24) { // se passar das 24 horas na França
    horaFranca -= 24 // subtrai 24
  }

  // exibe a resposta
  h2.innerText = `Hora na França ${horaFranca.toFixed(2)}`
  event.preventDefault()
})
