const form = document.querySelector("form")
const span = document.querySelector("span")
const pre = document.querySelector("pre")

const pacientes = []

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const paciente = form.inPaciente.value // obtém o nome do paciente
  pacientes.push(paciente)               // adiciona o nome do paciente no final do vetor
  let lista = ""                         // string para concatenar a lista de pacientes

  // for "tradicional" (inicia em 0, enquanto menor que tamanho do vetor "pacientes")
  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`
  }

  pre.innerText = lista       // exibe a lista de pacientes na página
  form.inPaciente.value = ""  // limpa o conteúdo do campo de formulário
  form.inPaciente.focus()     // posiciona o cursor no campo
})

form.btnUrgencia.addEventListener("click", function() {
  // verifica se as validações do form estão ok (no caso, paciente is required)
  if (!form.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência")
    form.inPaciente.focus()
    return
  }

  const paciente = form.inPaciente.value // obtém o nome do paciente
  pacientes.unshift(paciente)            // adiciona o nome do paciente início do vetor
  let lista = ""                         // string para concatenar a lista de pacientes

  // forEeach aplicado sobre o vetor "pacientes"
  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`
  })

  pre.innerText = lista       // exibe a lista de pacientes na página
  form.inPaciente.value = ""  // limpa o conteúdo do campo de formulário
  form.inPaciente.focus()     // posiciona o cursor no campo
})

form.btnAtender.addEventListener("click", function() {
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera")
    form.inPaciente.focus()
    return
  }

  const atender = pacientes.shift() // remove do início da fila (e obtém o nome do paciente)
  span.innerText = atender          // exibe o nome do paciente em atendimento

  let lista = "" // string para concatenar a lista de pacientes

  // forEeach aplicado sobre o vetor "pacientes"
  pacientes.forEach((paciente, i) => {
    lista += `${i + 1}. ${paciente}\n`
  })

  pre.innerText = lista       // exibe a lista de pacientes na página
  form.inPaciente.value = ""  // limpa o conteúdo do campo de formulário
  form.inPaciente.focus()     // posiciona o cursor no campo
})
