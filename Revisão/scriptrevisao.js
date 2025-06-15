// Revisando Javascript 09/06/2025
console.log("Inciando...");
//alert("Olá, Seja Bem Vindo!!!");

//var nome = prompt("Digite seu nome: ");
//var idade = parseInt(prompt("Digite sua idade: "));

//alert("Seu nome é: " + nome +"\nSua idade é: " + idade + "\nSua idade somada a 10 é: " + (idade+10));
/*___________________________________________________*/

console.log("Escrevendo na Tela...");

/*document.write('<h1 style="color:blue;">Revisando Javascript</h1> <br/>');
document.write('<p>Praticando durante a Revisão</p>');
document.write('<img src="https://www.ifpb.edu.br/ti/sistemas/imagens/suap.jpg/@@images/618215b7-76a7-4643-9c88-77c79f05ab9f.jpeg">');

console.log("Finalizando...");*/

//_______________________________________________________________________________________________________

function fazerConta(conta){
    let valor1 = parseFloat(prompt("Informe o primeiro valor: "));
    let valor2 = parseFloat(prompt("Informe o segundo valor: "));
    const area = document.getElementById('result-conta');
    let resultado;
    if(conta === '+'){
        resultado = valor1 + valor2;
        area.innerHTML= 'Resultado da Soma: ' + resultado;
    }
    else if(conta === '-'){
        resultado = valor1 - valor2;
        area.innerHTML= 'Resultado da Subtração: ' + resultado;
    }
    else if(conta === '*'){
        resultado = valor1 * valor2;
        area.innerHTML= 'Resultado da Multiplicação: ' + resultado;
    }
    else{
        resultado = valor1 / valor2;
        area.innerHTML= 'Resultado da Divisão: ' + resultado;
    }
}

//________________________________________________________________________________________________

let array = [];
const areaArray = document.getElementById('array');

function mostrarArray(){
    if(array.length === 0){
        areaArray.innerHTML="O Array está vazio...";
    }
    else{
        areaArray.innerHTML="Array: " +  array.join(' - ');
    }
}

function adicionarArray(){
    let itemArray = prompt("Digite um item para adicionar: ");
    array.push(itemArray);
}

function rmInicioArray(){
    array.shift();
}

function rmFimArray(){
    array.pop();
}

function pesquisaArray(){
    let itemPesquisa = prompt("Digite o nome do Item: ");
    if(array.indexOf(itemPesquisa) > -1){
        areaArray.innerHTML="A item " + itemPesquisa + " está na posição " + ((array.indexOf(itemPesquisa))+1);
    }
    else{
        areaArray.innerHTML="O item não está no Array!";
    }
}

//___________________________________________________________________________________________

function iniciaContador(){
    
    let valorContador = parseInt(prompt("Digite o valor do Contador: "));
    while(valorContador >= 0){
       document.write(valorContador+'<br>');
       valorContador--;
    }
}

function fazerMatriz(){
    let matriz = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    let lin, col;

    for(lin = 0; lin < 4; lin++){
        for(col = 0; col < 4; col ++){
            matriz[lin][col] = parseInt(prompt("Digite um número para linha " + (lin+1) + ", coluna " + (col+1) + ": "));
        }
    }
    
    for(lin = 0; lin < 4; lin++){
        for(col = 0; col < 4; col++){
            document.write("  " + matriz[lin][col] + "  ");
        }
        document.write("<br>");
    }

    document.write("<br><br><br>");

    for(lin = 0; lin < 4; lin++){
        for(col = 0; col < 4; col++){
            if(col === lin){
                document.write("  " + matriz[lin][col] + "  ");
            }
            else{
                document.write("  " + "_" + "  ");
            }
        }
        document.write("<br>");
    }

}

//_________________________________________________________________________________________

function sairLugar(opc){
    const sorteio = document.getElementById('sorteio');

    switch(opc){
        case 1: 
            sorteio.innerHTML="Beto Lanches";
            break; 
        case 2: 
            sorteio.innerHTML="Paiola Pizzaria";
            break; 
        case 3: 
            sorteio.innerHTML="Chicão Porções";
            break; 
        default: 
            sorteio.innerHTML="ERRO 111";
            break; 
    }
}

//______________________________________________________________________________________

let timer;

function iniciarTimer(){
    timer = setInterval(iniciaNumeros, 500);
}
function iniciaNumeros(){
    document.write("Timer<br>");
}

function encerrarTimer(){
    console.log(clearInterval(timer));
}

setTimeout(encerrarTimer, 6500);


//_________________________________________________________________________________________

function criarConta(){
    const nome = prompt("Digite seu nome: ");
    const senha = prompt("Digite sua senha: ");

    localStorage.Pessoa1 = [nome, senha];
}

function removeConta(){
    localStorage.removeItem('Pessoa1');
}

var areaCadastro = document.getElementById('Cadastro');
if(localStorage.getItem('Pessoa1') !== null || localStorage.getItem('Pessoa1') !== ""){
    areaCadastro.innerHTML = "Sem cadastros";
}else{
    console.log(localStorage.getItem('Pessoa1'));
}