const form = document.querySelector("form")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const ladoA = Number(form.inLadoA.value)
  const ladoB = Number(form.inLadoB.value)
  const ladoC = Number(form.inLadoC.value)

  h2.innerText = `Lados podem formar um triângulo!`

  if (ladoA == ladoB && ladoB == ladoC) {
    h3.innerText = `Triângulo Equilátero`
    return
  }

  if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
    h3.innerText = `Triângulo Isósceles`
    return
  }

  if (ladoA > ladoB && ladoA > ladoC && ladoB + ladoC > ladoA) {
    h3.innerText = `Triângulo Escaleno`
    return
  }

  if (ladoB > ladoA && ladoB > ladoC && ladoA + ladoC > ladoB) {
    h3.innerText = `Triângulo Escaleno`
    return
  }

  if (ladoC > ladoA && ladoC > ladoB && ladoA + ladoB > ladoC) {
    h3.innerText = `Triângulo Escaleno`
    return
  }

  h2.innerText = `Esses Lados não podem formar um triângulo!`
  h3.innerText = ``
})
