import React from "react";
import ListaProdutos from "./components/ListaProdutos";

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: "Samsung A51 - Celular",
      categoria: "Eletrônicos",
      preco: 2500,
    },
    {
      id: 2,
      nome: "Dell Inspiron 15 - Notebook",
      categoria: "Eletrônicos",
      preco: 4200,
    },
    {
      id: 3,
      nome: "Nike Airforce 2.0 - Tênis",
      categoria: "Calçados",
      preco: 850,
    },
    {
      id: 4,
      nome: "Insider Plus2 - Camiseta",
      categoria: "Vestuário",
      preco: 120,
    },
    {
      id: 5,
      nome: "Jordan MagnusLord - Tênis",
      categoria: "Calçados",
      preco: 1050,
    },
  ];

  return (
    <div className="fundo">
      <ListaProdutos produtos={produtos} />
    </div>
  );
}

/*

Projeto usado para praticar os hooks "useMemo" e "useCallback":

Cenário: Temos uma lista de intens onde precisamos aplicar um "filtro" complexo.

Problema: Esse filtro pode ser caro em desempenho, especialmente se a lista for grande,
assim se tornando custoso ter que reexecutar o filtro a cada re-renderização.

Solução: Reexecutar o filtro apenas se a Lista for atualizada, assim usando o useMemo.

*/
