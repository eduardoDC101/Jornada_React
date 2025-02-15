let contador = 0;

function escreverNaTela() {
  document.write("<h1 style='text-align:center;'>Escrevendo...</h1><br/><br/>");
  contador++;
  if (contador == 5) {
    clearInterval(temp);
  }
}

//setTimeout(escreverNaTela, 5000);

//setInterval(escreverNaTela, 500);

var temp = setInterval(escreverNaTela, 500);
