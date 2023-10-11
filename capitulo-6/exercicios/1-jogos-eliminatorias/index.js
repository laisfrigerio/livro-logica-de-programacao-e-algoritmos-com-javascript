const form = document.querySelector("form")
const pre = document.querySelector("pre")

const clubes = []

form.addEventListener("submit", function(event) {
  event.preventDefault()
  
  const time = form.inClube.value

  clubes.push(time)       

  form.inClube.value = "" 
  form.inClube.focus()

  form.btnListar.dispatchEvent(new Event("click"))
})

form.btnListar.addEventListener("click", function() {
  if (clubes.length == 0) {
    alert("Não clubes na lista...")
    form.inClube.focus()
    return
  }

  let lista = ""

  for (let i = 0; i < clubes.length; i++) {
    lista += `${i + 1}. ${clubes[i]}\n`
  }

  pre.innerText = lista 
  form.inClube.value = "" 
  form.inClube.focus()
})

form.btnTabela.addEventListener("click", function() {
  if (clubes.length == 0) {
    alert("Não clubes na lista...")
    form.inClube.focus()
    return
  }

  if (clubes.length % 2 !== 0) {
    alert('Adicione mais um clube para poder montar a tabela de jogos !')
    form.inClube.focus()
    return
  }

  let lista = ""
  let ultimoClube = clubes.length - 1

  for (let i = 0; i < (clubes.length - 1) / 2; i++) {
    lista += `${clubes[i]} x ${clubes[ultimoClube]}\n`
    ultimoClube--
  }

  pre.innerText = lista      
  form.inClube.value = ""
  form.inClube.focus() 
})
