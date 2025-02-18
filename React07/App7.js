import React, { Component } from "react";
import Feed from "./componentes_app2/Feed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, nome: "Ana1", curtidas: 38, comentarios: 22 },
        { id: 2, nome: "Bianca2", curtidas: 43, comentarios: 34 },
        { id: 3, nome: "Carlos3", curtidas: 65, comentarios: 12 },
        { id: 4, nome: "Daniel4", curtidas: 1, comentarios: 1 },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.feed.map((item) => {
          return (
            <div>
              <Feed
                key={item.id}
                nome={item.nome}
                curtidas={item.curtidas}
                comentarios={item.comentarios}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

//Muito extenso, vamos criar um componente pra ele:

/*{this.state.feed.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.nome}</h3>
        <a href=".">{item.curtidas} Curtidas </a>|
        <a href="."> {item.comentarios} Comentários</a>
      </div>
    );
  })}*/
