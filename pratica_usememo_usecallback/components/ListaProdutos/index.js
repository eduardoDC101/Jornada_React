import "./style.css";
import React, { useState, useMemo, useCallback } from "react";

export default function ListaProdutos({ produtos }) {
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [maxValor, setMaxValor] = useState(Infinity); // 1

  // 1.1
  const filtroProdutos = useMemo(() => {
    return produtos.filter((produto) => {
      return (
        (categoria === "" ||
          produto.categoria.toLowerCase() === categoria.toLowerCase()) &&
        produto.preco <= maxValor &&
        (produto.nome.toLowerCase().includes(nome.toLowerCase()) || nome === "")
      );
    });
  }, [produtos, categoria, maxValor, nome]);

  const qtdResults = useCallback((filtro) => {
    return filtro.length;
  }, []);

  return (
    <div className="fundoListaProdutos">
      <h1>Lista de Produtos:</h1>
      <div className="alinhar">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>
            {/* 1.2 */}
            Categoria:
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Calçados">Calçados</option>
              <option value="Vestuário">Vestuário</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Preço Máximo:
            <input
              type="number"
              value={maxValor}
              onChange={(e) => setMaxValor(Number(e.target.value))}
            />
          </label>
        </div>
      </div>
      <h2>Qtd. de Produtos: {qtdResults(filtroProdutos)}</h2>
      <ul>
        {filtroProdutos.map((produtos) => (
          <li key={produtos.id}>
            {produtos.nome} - {produtos.categoria} - {produtos.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*

1 - Usamos infinity por que não queremos limitações de preços na hora de exibir, ou seja, vamos exibir todos oos produtos, com valoresde 0 a infinito positivo


1.1 - const filtroProdutos:

" A constante filtroProdutos, vai ser um array, ela vai armazenar os itens depois de serem filtrados.

Dentro dela usamos o useMemo, e passarmos [produtos, categoria, maxValor], ou seja, ele só vai refazer a filtragem se o array de objetos produtos mudar, ou se os states categoria e maxValor mudar.

Vamos rodar quando a página iniciar uma vez a função de useMemo. E se algum desses 3 mudarem, vamos rodar denovo a função de useMemo.

A função de useMemo é:
return produtos.filter((produto) => {...}
Ou seja, vamos percorrer cada item de produtos e armazena-lo tenporariamente em produto.

O .filter, precisa receber true ou false, se for true ele pega o item da vez(produto) e retorna/salva ele. Se for false, ele pula.

(categoria === "" || produto.categoria.toLowerCase() === categoria.toLowerCase()) && 
produto.preco <= maxValor);

Se categoria for vazia (que é), todos vão retornar true e todos vão ser armazenados em filtroProduto.
Ou, se produto.categoria for igual a categoria(que vc terá selecionado), os que forem iguais vão retornar true e vão entrar na lista filtroProduto.
E, se produto.preco for igual ou menor o valor que vc digitou, ele retorna true e é armazenado.
E, (produto.nome.toLowerCase().includes(nome.toLowerCase()) || nome === "")
Isso é, se o state nome estiver dentro do item do objeto (produto.nome) vai retornar True (ou se state nome for vazio : || nome === "" ai retorna todos )"


1.2 - Poderiamos ter colocado o label com htmlFor, e associalo aos itens, entretanto assim fica mais facil e organizado, mais semântico e associado (Se clicarmos em "Categoria:" a caixa é selecionada)     

*/
