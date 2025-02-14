// Função mudar():
function mudar() {
  var area = document.getElementById("area");
  var texto = prompt("Digite seu nome: ");
  if (texto == "" || texto == " " || texto == null) {
    area.innerHTML = "Nenhum nome digitado!!!";
  } else {
    area.innerHTML = "Bem vindo, " + texto + "!";
  }
}

function mudar2(cpf) {
  var area2 = document.getElementById("area2");
  var texto2 = prompt("Digite seu CPF: ");
  if (texto2 == "" || texto2 == " " || texto2 == null) {
    area2.innerHTML = "CPF: " + cpf;
  } else {
    area2.innerHTML = "CPF: " + texto2;
  }
}
