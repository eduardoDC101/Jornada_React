import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      error: "",
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event) {
    const { nome, email, senha } = this.state;
    if (nome !== "" && email !== "" && senha !== "") {
      alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`);
    } else {
      this.setState({ error: "Ops, você não preencheu algum item!" });
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Novo Usuário</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome..."
            value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
          <br />
          <label>E-mail: </label>
          <input
            type="text"
            name="email"
            placeholder="Seu e-mail..."
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <label>Senha: </label>
          <input
            type="password"
            name="senha"
            placeholder="Sua senha..."
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
//vamos usar form pq agora vamos usar um botão para enviar o formulário.
