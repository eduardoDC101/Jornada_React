// Funções Anônimas (com find, map e reduce):

const lista = [1, 2, 3, 4, 5, 6];

//Antes tinhamos:
const listaReduce = lista.reduce(function (total, proximo) {
  return total + proximo;
});
console.log("Antes: " + listaReduce);

//Agora com uso das funções anônimas temos:
const listaReduceA = lista.reduce((total, proximo) => total + proximo);
console.log("Agora: " + listaReduceA);

//Note que tiramos o "function" que estava dentro do reduce, no lugar colocamos "=>"
//Observe que tiramos o "return" e as {} também. Isso só fizemos por que o conteudo (return total+proximo)
//tinha apenas 1 linha, para mais linhas de código, tirariamos apenas o function e colocariamos o =>, sem alterar o {} e return.

//: Exemplo mais extenso:

//Era: 140
const listaMapA1 = lista.map(function (item, index) {
  let soma1 = item + index;
  return soma1 * 2;
});
console.log(`Era: ${listaMapA1}`);

//Virou: 134
const listaMapA2 = lista.map((item, index) => {
  let soma1 = item + index;
  return soma1 * 2;
});
console.log(`Virou: ${listaMapA2}`);

//Poderia ser: 101
const listaMapA3 = lista.map((item, index) => (item + index) * 2);
console.log(`Poderia ser: ${listaMapA3}`);
