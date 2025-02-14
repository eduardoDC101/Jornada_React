//alert = usado para criar uma caixa de alerta na tela
alert("Seja Bem-Vindo!!!");

//prompt = usado para receber e armazenar um valor
var nome = prompt("Digite seu nome: ");
var cpf = prompt("Digite seu CPF: ");

//console.log = usado para mostrar algo no console
console.log("Nome: " + nome + "\nCPF: " + cpf);

//document.write = usado para escrever no documento (html)
document.write(
  "<h3 style='font-family:monospace;'>Nome: " +
    nome +
    "<br>CPF: " +
    cpf +
    "</h3>"
);

document.write(
  "<img src='https://media.licdn.com/dms/image/v2/D4D03AQGr0LqqzOpspA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721051292032?e=2147483647&v=beta&t=cOH3XtgiQefZBw2V8xvTnu6B7Q_JTwsxpIaJfZQ8BBQ'/>"
);
