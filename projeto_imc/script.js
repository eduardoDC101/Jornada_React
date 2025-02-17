let area = document.getElementById("area");

function calcularImc(event) {
  event.preventDefault();

  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  let imc = peso / altura ** 2;

  if (imc < 18.5) {
    area.innerHTML = `Magreza, seu imc é de: ${imc.toFixed(1)}`;
  } else if (imc > 18.5 && imc < 24.9) {
    area.innerHTML = `Normal, seu imc é de: ${imc.toFixed(1)}`;
  } else if (imc > 24.9 && imc < 30) {
    area.innerHTML = `Sobrepeso, seu imc é de: ${imc.toFixed(1)}`;
  } else if (imc >= 30) {
    area.innerHTML = `Obesidade, seu imc é de: ${imc.toFixed(1)}`;
  }

  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
