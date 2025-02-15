//Rest Operator:

//Rest com Funções:
function retornaNomes(nomes) {
  return nomes;
}
function retornaNomes2(...nomes2) {
  return nomes2;
}

console.log(
  `Nomes: ${retornaNomes("Ana", "Bianca", "Carlos", "Douglas", "Eduardo")}`
);
console.log(
  `Nomes: ${retornaNomes2("Ana", "Bianca", "Carlos", "Douglas", "Eduardo")}`
);

//-----------------------------------------------------------------------------------------------
//Praticando usando o Rest e o Spread Operator:

function register(users, ...newUsers) {
  let allusers = [...users, ...newUsers];
  return console.log(allusers);
}

let users = ["Ana", "Beatriz"];
let end = register(users, "Carlos", "Douglas");

// Aqui usamos rest e spread
/*
Criamos uma função que recebe 2 parametros, um parametro "unico"(users) e um parametro rest(newUsers).
Dentro dela, ela cria uma lista let, que recebe por meio de spread, tudo de users e newUsers.
Por fim retornamos essa lista(allusers).

Criamos um let fora chamado users, ele é um array com 2 nomes.
Criamos outro let fora, ele recebe o retorno de register, que é um array.

Na chamada da função, chamamos como parametros users para users, ou seja, o nosso parametro unico recebe um array contendo ana e beatriz.
Nosso parametro rest recebe 2 nomes, carlos e douglas.
No fim ele junta tudo
*/
