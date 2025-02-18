import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      status2: false,
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({ status2: true });
  }

  sair() {
    this.setState({ status2: false });
  }

  render() {
    return (
      <div>
        <h2>Sistema:</h2>
        {this.state.status === 1 && <h2>Bem Vindo ao Sistema</h2>}
        {this.state.status2 ? (
          <div>
            <h2>Seja Bem-vindo ao Sistema</h2>
            <button onClick={this.sair}>Sair</button>
          </div>
        ) : (
          <div>
            <h2>Olá visitante, faça login</h2>
            <button onClick={this.entrar}>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

/* __     __  _____    ____      _      _    ___    _  */
/* \ \   / / | ____|  / ___|    / \    / |  / _ \  / | */
/*  \ \ / /  |  _|   | |  _    / _ \   | | | | | | | | */
/*   \ V /   | |___  | |_| |  / ___ \  | | | |_| | | | */
/*    \_/    |_____|  \____| /_/   \_\ |_|  \___/  |_| */
