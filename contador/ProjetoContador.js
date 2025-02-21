import React, { useState } from "react";
import "./Css/style.css";

export default function App() {
  const [contador, setContador] = useState(0);

  const [meta, setMeta] = useState();

  const [valor, setValor] = useState();

  function subtrair() {
    if (contador === 0) {
      alert("Contador Zerado");
    } else {
      setContador(contador - 1);
    }
  }

  function Defmeta() {
    let metaa = prompt("Digite sua meta: ");
    if (metaa !== null && metaa !== "0") {
      setMeta(metaa);
      setValor("/");
    }
  }

  function adicioar() {
    let metaInt = parseInt(meta);
    if (contador === metaInt - 1) {
      alert("Meta batida!!!");
      setContador(0);
      setMeta();
      setValor();
    } else {
      setContador(contador + 1);
    }
  }

  return (
    <div className="fundo">
      <div className="valores">
        <h1>{contador}</h1>
        <h1>
          {valor}
          {meta}
        </h1>
      </div>
      <div className="fundoBtn">
        <button type="button" onClick={adicioar}>
          +
        </button>
        <button type="button" onClick={subtrair}>
          -
        </button>
        <button type="button" onClick={() => setContador(0)}>
          ~
        </button>
      </div>
      <div className="fundoMeta">
        <button type="button" onClick={Defmeta}>
          Definir Meta
        </button>
      </div>
    </div>
  );
}
