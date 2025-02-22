import React from "react";
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ullamcorper massa ut pulvinar rutrum. Nulla sed lacus nec elit pharetra
        aliquet id at mauris. In et dui id felis condimentum rutrum at eget est.
        Proin rutrum eu mi in imperdiet. Sed condimentum metus dui, non aliquet
        elit tincidunt sed.
      </p>
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
        <Link to="/produtos/1">Ir para Produtos</Link>
      </div>
    </div>
  );
}
