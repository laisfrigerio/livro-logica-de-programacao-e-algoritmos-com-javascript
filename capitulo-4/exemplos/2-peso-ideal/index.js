const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  const nome = form.inNome.value
  const masculino = form.inMasculino.checked
  const altura = Number(form.inAltura.value)

  let peso // declara a variável peso

  if (masculino) { // (masculino == true)
    peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadrado
  } else { 
    peso = 21 * Math.pow(altura, 2)
  }

  h2.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
  event.preventDefault()
})

form.addEventListener("reset", function() {
    h2.innerText = "" // limpa o conteúdo do elemento h2 que exibe a resposta do programa
})