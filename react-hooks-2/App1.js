import React, { useState } from "react";
import "../Css/style2.css";

export default function App() {
  const [tarefas, setTarefas] = useState(["Treinar Musculação"]);

  const [input, setInput] = useState("");

  function adicionarItem() {
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div className="fundoLista">
        <div className="pesquisar">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" onClick={adicionarItem}>
            Adicionar
          </button>
        </div>
        <div className="fundoTarefas">
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa}>{tarefa}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/*

import React, { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([
    "Estudar HTML",
    "Estudar CSS",
    "Estudar Javascript",
  ]);

  const [input, setInput] = useState("");

  
  Exemplo estra:   const [nome, setNome] = useState("Carlos");
  Chamando: <h1>{nome}</h1>
  

  function handleAdd() {
    setTarefas([...tarefas, input]);

    setInput("");
  }

  return (
    <div>
      <h1>[ Introdução a Hooks ]</h1>
      <h3>Lista de Tarefas:</h3>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}
_____
*/
