import React from "react";
import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div className="fundoErro">
      <h2>ERRO - Ops!, página não encontrada...</h2>
      <br />
      <br />
      <h3>
        Voltar a <Link to="/">Página Inicial.</Link>
      </h3>
    </div>
  );
}
