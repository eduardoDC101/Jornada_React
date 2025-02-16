function verTempo() {
  if (contadorTempo < 60) {
    alert(`Você ficou ${contadorTempo} segundos na página!`);
  } else {
    if (contadorTempo % 60 == 0) {
      let tempoMinutos = contadorTempo / 60;
      alert(`Você ficou ${tempoGasto} minutos na página!`);
    } else {
      let minutosSeg = contadorTempo - (contadorTempo % 60);
      let minutosMin = minutosSeg / 60;
      let segundos = contadorTempo % 60;
      alert(`Você ficou ${minutosMin} minutos e ${segundos} na página!`);
    }
  }
}

let contadorTempo = 0;

function tempoGasto() {
  contadorTempo += 1;
}

function Relogio() {
  let areadiv = document.getElementById("Relogio");
  if (contadorTempo < 10) {
    areadiv.innerHTML = `<h1> 00 : 00 : 0${contadorTempo}</h1>`;
  }
  if (contadorTempo > 10 && contadorTempo < 60) {
    areadiv.innerHTML = `<h1> 00 : 00 : ${contadorTempo}</h1>`;
  }
  if (contadorTempo > 60) {
    let minutosSeg = contadorTempo - (contadorTempo % 60);
    let minutosMin = minutosSeg / 60;
    let segundos = contadorTempo % 60;
    if (segundos < 10) {
      areadiv.innerHTML = `<h1> 00 : 0${minutosMin} : 0${segundos}</h1>`;
    } else {
      areadiv.innerHTML = `<h1> 00 : 0${minutosMin} : ${segundos}</h1>`;
    }
  }
}

let ligado;
let ligado2;

function ligar() {
  ligado = setInterval(Relogio, 1000);
  ligado2 = setInterval(tempoGasto, 1000);
}

function desligar() {
  clearInterval(ligado);
  clearInterval(ligado2);
}
