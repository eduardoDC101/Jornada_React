import React, { useState, useEffect } from "react";
import "../Css/style.css";

export default function App() {
  //Hooks-------------------------------------------------------

  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("Tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  //Funções-----------------------------------------------------

  function adicionar() {
    if (input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  return (
    <div className="fundoLista">
      <ol>
        {tarefas.map((tarefa) => {
          return <li key={tarefa}>{tarefa}</li>;
        })}
      </ol>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={adicionar}>
        Adicionar
      </button>
    </div>
  );
}
