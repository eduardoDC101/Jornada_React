import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Carlos",
      contador: 0,
    };

    this.aumentar = this.aumentar.bind(this);
    this.subtrair = this.subtrair.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.nome = "Jurandir";
    state.contador += 1;
    this.setState(state);
  }

  subtrair() {
    let state = this.state;
    state.nome = "Vascaina";
    if (state.contador === 0) {
      alert("Chegou a Zero");
      return;
    }
    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h2>
          <button onClick={this.subtrair}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h2>
      </div>
    );
  }
}

export default App;
