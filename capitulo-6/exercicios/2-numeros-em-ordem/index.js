const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

const numeros = []

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const numero = Number(form.inNumero.value)

  if (isNaN(numero) || numeros.indexOf(numero) >= 0) {
    alert('Digite um número válido !')
    form.inNumero.value = ''
    form.inNumero.focus()
    return
  }

  numeros.push(numero)
  
  h2.innerText = `Números: ${numeros.join(", ")}` 
  form.inNumero.value = "" 
  form.inNumero.focus()

  form.inNumero.value = "" 
  form.inNumero.focus()
})

form.btnVerificar.addEventListener("click", function() {
  if (numeros.length == 0) {
    alert("Não números na lista...")
    form.inNumero.focus()
    return
  }

  let emOrdem = true

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      emOrdem = false
      break
    }
  }

  if (emOrdem) {
    h3.innerText = "Números estão em ordem crescente"
  } else {
    h3.innerText = "Atenção...Números não estão em ordem crescente"
  }

  form.inNumero.value = "" 
  form.inNumero.focus()
})
