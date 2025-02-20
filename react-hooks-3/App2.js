import React, { useState, useMemo } from "react";

export default function Pai() {
  const [array, setArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  const white = {
    color: "white",
  };

  const multi = (numeros) => {
    return numeros.reduce((arg, item) => arg * item, 1);
  };

  const MemoMulti = useMemo(() => multi(array), [array]);

  function adicionarItem() {
    const valor = prompt("Digite o valor: ");
    setArray([...array, valor]);
  }

  return (
    <div style={white}>
      <h1>Array: {array.join(", ")}</h1>
      <h2>Multiplicação: {MemoMulti}</h2>

      <button onClick={adicionarItem}>Adicionar Item</button>
    </div>
  );
}
