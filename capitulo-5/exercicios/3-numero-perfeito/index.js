const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)

  if (numero < 1) {
    pre.innerText = "Informe um número maior que zero"
    return
  }

  let soma = 0
  let divisores = `Divisores do ${numero}: `

  for (let i = 1; i < numero; i++) {
    if (numero % i != 0) {
      continue
    }

    if (i == 1) {
      divisores += `${i}`
    } else {
      divisores += `, ${i}`
    }

    soma += i
  }

  divisores += ` (Soma: ${soma})`

  h2.innerText = divisores
  
  if (soma == numero) {
    h3.innerText = `${numero} é um Número Perfeito`
  } else {
    h3.innerText = `${numero} não é um Número Perfeito`
  }
})
