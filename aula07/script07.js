//Variáveis Gerais
let areaNome = document.getElementById("areaNome");
let nome = "";

//Verificar Dados
if (typeof localStorage.dados == "undefined") {
  areaNome.innerHTML = `<h4>Sem Dados Guardados...</h4>`;
} else {
  areaNome.innerHTML = `<h4>${localStorage.dados}</h4>`;
}

//Inserir Dados
function inserirNome() {
  if (typeof localStorage.dados == "undefined") {
    dadosuser = prompt("Digite o dado a ser guardado: ");
    if (dadosuser == "" || dadosuser == " " || dadosuser == null) {
      alert("Inválido!!!");
    } else {
      localStorage.setItem("dados", dadosuser);
      areaNome.innerHTML = `<h4>${localStorage.dados}</h4>`;
    }
  } else {
    alert("Já tem dados!!!");
  }
}

//Remover Dados
function removerNome() {
  if (typeof localStorage.dados == "undefined") {
    alert("Sem dados para remover!!!");
  } else {
    localStorage.removeItem("dados");
    areaNome.innerHTML = `<h4>Sem Dados Guardados...</h4>`;
  }
}
