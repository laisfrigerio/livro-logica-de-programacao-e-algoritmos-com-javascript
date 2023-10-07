const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)
  let numeroDivisores = 0

  for (let i = 1; i <= numero; i++) { // cria um laço de repetição de 1 até o número informado
    if (numero % i == 0) {
      numeroDivisores++ // se é divísvel, incrementa o contador
    }
  }

  if (numeroDivisores == 2) {
    h2.innerText = `${numero} É primo`
  } else {
    h2.innerText = `${numero} Não é primo`
  }
})
