import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "teste@gmail.com",
      senha: "1234",
      sexo: "Masculino",
    };

    this.mudarEmail = this.mudarEmail.bind(this);
    this.mudarSexo = this.mudarSexo.bind(this);
  }

  mudarEmail(event) {
    let valorDigitado = event.target.value;
    this.setState({ email: valorDigitado });
  }

  mudarSexo(event) {
    let valorDigitado = event.target.value;
    this.setState({ sexo: valorDigitado });
  }

  render() {
    return (
      <div>
        <h2>Registro</h2>
        <label>E-mail </label>
        <input
          type="text"
          name="email"
          placeholder="teste@gmail.com"
          value={this.state.email}
          onChange={this.mudarEmail}
        />
        <br />
        <label>Senha </label>
        <input
          type="password"
          name="senha"
          placeholder="1234"
          value={this.state.senha}
          onChange={(event) => this.setState({ senha: event.target.value })}
        />
        <br />
        <label>Sexo</label>
        <select name="sexo" value={this.state.sexo} onChange={this.mudarSexo}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <br />
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;
