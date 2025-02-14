var texto = document.getElementById("areaListas");
var lista = [];

function inserir() {
  let valorInserir = prompt("Digite o valor para ser inserido: ");
  if (valorInserir == "" || valorInserir == " " || valorInserir == null) {
    texto.innerHTML = "Lista: " + lista;
  } else {
    lista.push(valorInserir);
    texto.innerHTML = "Lista: " + lista;
  }
}

function removerF() {
  lista.pop();
  texto.innerHTML = "Lista: " + lista;
}

function removerI() {
  lista.shift();
  texto.innerHTML = "Lista: " + lista;
}

function subisti() {
  let posicao = parseInt(
    prompt("Digite a posição do item a ser substituido: ")
  );

  let newValor = prompt("Digite o novo valor: ");

  lista[posicao] = newValor;
  texto.innerHTML = "Lista: " + lista;
}

function limpar() {
  while (lista.length != 0) {
    lista.pop();
  }
  texto.innerHTML = "Lista: " + lista;
}

function verificar() {
  let senha = prompt("Digite sua senha: ");
  if (senha == "101br") {
    let areaa = document.getElementById("senha");
    areaa.innerHTML =
      "<a href='aula05.html'><button style='width: 300px;padding: 20px;margin: 10px;border-radius: 10px;font-size: 18px;background-color: rgb(122, 122, 173);' '>Entrar</button></a>";
  }
}
