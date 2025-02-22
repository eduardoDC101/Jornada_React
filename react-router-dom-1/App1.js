import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts ";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadApi();
  }, []);

  return (
    <div className="fundoGeral">
      <header>
        <h1>Nutri Notícias</h1>
      </header>
      <main className="fundoNoticias">
        {nutri.map((item) => {
          return (
            <article className="artigoNutri" key={item.id}>
              <h2>{item.titulo}</h2>
              <h4>
                <i>Categoria: {item.categoria}</i>
              </h4>
              <img src={item.capa} alt="imagem capa" />
              <p>{item.subtitulo}</p>
              <button>Ver mais</button>
            </article>
          );
        })}
      </main>
    </div>
  );
}

//fetch(url).then((r) => r.json()).then((json) => console.log(json));

/*
ou

useEffect(() => {
    fetch(https://sujeitoprogramador.com/rn-api/?api=posts )
     .then((r) => r.json())
     .then((json) => {
        console.log(json);
        setNutri(json);
      });
  }, []);

*/
