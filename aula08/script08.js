// Objeto Pessoa

// let pessoa = {nome: "Carlos", sobrenome: "Cruz", idade: 30, altura: 1.94, cargo: "Professor"};
//ou

const pessoa = {
  nome: "Carlos",
  sobrenome: "Cruz",
  idade: 30,
  altura: 1.94,
  cargo: "Professor",
};

//Desconstruir 1 item
let { nome } = pessoa;

//Desconstruir 2 ou + itens:
let { sobrenome, idade, cargo } = pessoa;

//Desconstruir item em outro chve:
let { altura: metros } = pessoa;

//-----------------------------------------------

//Arrays/Listas
const lista = ["Carlos", "Pedro", "Afonço", "Douglas"];

//Desconstruir 1 item:
let { 0: nome1 } = lista;

//Desconstruir mais de 1:
let { 1: nome2, 2: nome3 } = lista;

//Mudar chaves em listas:
let [um, dois, tres, quatro] = lista;
