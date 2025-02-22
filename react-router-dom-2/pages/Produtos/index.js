import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Produtos() {
  const { id } = useParams();

  return (
    <div>
      <h1>Produtos</h1>
      <h3>Código do Produto: {id}</h3>
      <p>
        Donec porttitor pharetra finibus. In volutpat efficitur felis et
        consequat. Maecenas sem elit, iaculis ut dolor sit amet, sagittis
        volutpat nulla. Suspendisse ut felis at nisi porta porttitor. Aenean
        convallis turpis ac libero convallis eleifend. Proin elementum mauris
        suscipit dolor consectetur scelerisque.
      </p>

      <br />
      <br />

      <div className="fundoLinks">
        <Link to="/">Ir para Home</Link>
        <br />
        <Link to="/sobre">Ir para Sobre</Link>
      </div>
    </div>
  );
}
