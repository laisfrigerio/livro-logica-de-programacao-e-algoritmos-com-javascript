const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)
  let estrelas = "" // variável que irá concatenar as estrelas/traços

  for (let i = 1; i <= numero; i++) { // cria um laço de repetição de 1 até o número informado
    if (i % 2 == 1) { // é ímpar
      estrelas = `${estrelas}*`
			// ou
      // estrelas += "*""
			// ou
			// estrelas = estrelas + "*"
    } else {
      estrelas = `${estrelas}-`
    }
  }

  h2.innerText = estrelas
})
