//Spread Operator '...'

//Spread com Arrays:
var lista1 = ["A", "B", "C"];
var lista2 = ["D", "E", "F"];
console.log(`Lista 1: ${lista1}`);
console.log(`Lista 2: ${lista2}`);
var lista3 = [...lista1, ...lista2];
console.log(`Listas juntas com Spread Operator: ${lista3}`);

console.log(" ");

//Spread com Objetos:
const objeto1 = {
  nome: "Eduardo",
  idade: 19,
};

const objeto2 = {
  ...objeto1,
  cargo: "Analista",
  nivel: "Pleno",
};

let { nome, idade } = objeto1;

console.log(`Objeto 1: ${nome}, ${idade}`);
console.log(
  `Ojeto com Spread Operator: ${objeto2.nome}, ${objeto2.idade}, ${objeto2.cargo}, ${objeto2.nivel}`
);

//Spread com Funções:

function retornarDados(dados) {
  var newDate = {
    ...dados,
    cargo: "Biologa",
    nivel: "Junior",
  };

  let { nome, idade, cargo, nivel } = newDate;

  return `${nome}, ${idade}, ${cargo}, ${nivel}`;
}

console.log(`New Date: ${retornarDados({ nome: "Ana Julia", idade: 22 })}`);
