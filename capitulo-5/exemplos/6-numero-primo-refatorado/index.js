const form = document.querySelector("form")
const h2 = document.querySelector("h2")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)
  let temDivisor = 0

  for (let i = 2; i <= numero / 2; i++) { // cria um laço de repetição de 1 até o número informado
    if (numero % i == 0) {
      temDivisor = 1
      break
    }
  }

  if (numero > 1 && !temDivisor) { // se num > 1 e não possui divisor
    h2.innerText = `${numero} É primo`
  } else {
    h2.innerText = `${numero} Não é primo`
  }
})
