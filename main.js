function dig(val) {
  document.getElementById("resultado").value += val
}

function calcular() {
  let x = document.getElementById("resultado").value
  let y = eval(x)
  document.getElementById("resultado").value = y

  document.getElementById("historico").value += (x + ' = ' + y) + '\n'
}

function limpar() {
  document.getElementById("resultado").value = ""
} 

function limparHistorico() {
  document.getElementById("historico").value = ""
}