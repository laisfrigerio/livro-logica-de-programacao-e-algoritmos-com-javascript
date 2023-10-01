const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const nome = form.inNome.value
  const nota1 = Number(form.inNota1.value)
  const nota2 = Number(form.inNota2.value)

  const media = ((nota1 + nota2) / 2).toFixed(2)

  h2.innerText = `Média das notas ${media}`

  if (media >= 7.00) {
    h3.innerText = `Parabéns, ${nome}. Você está aprovado(a)!`
    h3.style.color = "green"
  } else if (media >= 4.00) {
    h3.innerText = `Atenção, ${nome}. Você está em exame`
    h3.style.color = "blue"
  } else {
    h3.innerText = `Ops, ${nome}. Você foi reprovado(a)`
    h3.style.color = "red"
  }
})
