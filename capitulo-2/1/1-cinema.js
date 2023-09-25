const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

// cria um evento "ouvinte" no formulário, para quando o botão "submit for pressionado
form.addEventListener("submit", function(event) {
  const titulo = form.inTitulo.value
  const duracao = Number(form.inDuracao.value)
  const horas = Math.floor(duracao / 60)
  const minutos = duracao % 60
  h2.innerText = titulo
  h3.innerText = `${horas} horas(s) e ${minutos} minuto(s)`
  event.preventDefault() // evita o envio do formulário
})
