// Métodos Some e Every

let nomes = [
  { nome: "Eduardo", idade: 19 },
  { nome: "Carlos", idade: 22 },
  { nome: "Pedro", idade: 17 },
];

// Some: Pelomenos 1
console.log(nomes.some((nome) => nome.nome == "Carlos"));

//Sem funções anônimas:
console.log(
  nomes.some(function (nome) {
    return nome.nome == "Carlos";
  })
);
//_________________________________________________________________________
// Every: Todos
console.log(nomes.every((nome) => nome.idade >= 18));

//Sem funções anônimas:
console.log(
  nomes.every(function (nome) {
    return nome.idade >= 16;
  })
);

//Com if:
if (nomes.every((nome) => nome.idade >= 18)) {
  document.write("<h1>Todos são maiores de idade!</h1>");
} else {
  document.write("<h1>Tem um menor de idade!</h1>");
}

//Com if mas sem funções anônimas:

if (
  nomes.every(function (nome) {
    return nome.idade >= 18;
  })
) {
  document.write("<h1>Todos são maiores de idade!</h1>");
} else {
  document.write("<h1>Tem um menor de idade!</h1>");
}
