const form = document.querySelector("form")
const respError = document.querySelector("#respError span")
const respChances = document.querySelector("#respChances span")
const respDica = document.querySelector("#respDica i")

// Número aleatório entre 1 e 100
const sorteado = Math.floor(Math.random() * 100) + 1

const errors = [] // vetor de escopo global com os números já apostados
const CHANCES = 6 // constante com o número máximo de tentativas

form.addEventListener("submit", function(event) {
  event.preventDefault()

  const aposta = Number(form.inAposta.value)

  if (aposta == sorteado) {
    respDica.innerText = `Parabéns!!! Número sorteado: ${sorteado}`
    form.btnApostar.disabled = true         // desabilita o botão de apostar
    form.btnJogarNovamente.disabled = false // habilita o botão de jogar novamente
    return
  }

  if (errors.includes(aposta)) {
    alert(`Você já apostou no número ${aposta}. Tente outro...`)
    return
  }

  // adiciona o número apostado no vetor de erros
  errors.push(aposta)
  
  // obtém tamanho do vetor "errors"
  const quantidadeErrors = errors.length

  // calcula a quantidade de chances restantes
  const quantidadeChances = CHANCES - quantidadeErrors

  respError.innerText = `${quantidadeErrors} (${errors.join(", ")})`
  respChances.innerText = quantidadeChances

  if (quantidadeChances == 0) {
    alert(`Suas chances acabaram...`)
    form.btnApostar.disabled = true         // desabilita o botão de apostar
    form.btnJogarNovamente.disabled = false // habilita o botão de jogar novamente
    return
  }

  // usa o operador ternário para a mensagem de dica
  const dica = aposta < sorteado ? "maior" : "menor"
  respDica.innerText = `Dica: Tente um número ${dica} que ${aposta}`
  
  form.inAposta.value = ""  // limpa o conteúdo do campo de formulário
  form.inAposta.focus()     // posiciona o cursor no campo
})

form.btnJogarNovamente.addEventListener("click", function() {
  location.reload() // recarrega a página
})
