import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "teste@gmail.com",
        senha: "1234",
        sexo: "Masculino",
      },
    };

    this.mudaForm = this.mudaForm.bind(this);
  }

  mudaForm(event) {
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <div>
        <h2>Registro 2</h2>
        <label>E-mail </label>
        <input
          type="text"
          name="email"
          placeholder="teste@gmail.com"
          value={this.state.form.email}
          onChange={this.mudaForm}
        />
        <br />
        <label>Senha </label>
        <input
          type="password"
          name="senha"
          placeholder="1234"
          value={this.state.form.senha}
          onChange={this.mudaForm}
        />
        <br />
        <label>Sexo</label>
        <select
          name="sexo"
          value={this.state.form.sexo}
          onChange={this.mudaForm}
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <br />
        <div>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;

//Facil de dar manutenção
