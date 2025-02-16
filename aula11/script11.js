// Trabalhando com Arrays

// Método Map:
const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Jeito antigo:
/*for (i = 0; i < 10; i++) {
  console.log(lista1[i]);
}*/

//Jeito novo:
const listamap1 = lista1.map(function (item) {
  return item;
});
console.log(listamap1);

//Jeito antigo:
/*for (i = 0; i < 10; i++) {
  console.log(lista1[i] * 5);
}*/

//Jeito Novo:
const listamap2 = lista1.map(function (item) {
  return item * 5;
});
console.log(listamap2);

//Jeito antigo:
/*for (i = 0; i < 10; i++) {
  console.log(lista1[i] + i);
}*/

//Jeito Novo:
const listamap3 = lista1.map(function (item, index) {
  return item + index;
});
console.log(listamap3);

//---------------------------------------------------------------------------------------------

//Método Find:
const lista2 = ["Carlos", "Eduardo", "Carlos", "Douglas", "Pedro"];
const listafind1 = lista2.find(function (item) {
  return item == "Carlos";
});
console.log(listafind1);

//Forma antiga
/*for (i = 0; i < 10; i++) {
  if (lista2[i] == "Carlos") {
    console.log(lista2[i]);
  } else {
    console.log("Undefined");
  }
}*/

//----------------------------------------------------------

//Método Reduce:
const listareduce1 = lista1.reduce(function (total, proximo) {
  return total + proximo;
});
console.log(listareduce1);

//Método Antigo:
/*var total = 0;
for (i = 0; i < 10; i++) {
  total += lista1[i];
}
console.log(total);*/

/*=============================================================================*/
