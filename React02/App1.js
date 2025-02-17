import React, { Component } from "react";

class Concursos extends Component {
  render() {
    return (
      <div>
        <DadosConcurso
          nome={this.props.nome}
          vagas={this.props.vagas}
          cargos={this.props.cargos}
          dificuldade={this.props.dificuldade}
        />
        <Acessar acesso={this.props.acesso} />
        <hr />
      </div>
    );
  }
}

class DadosConcurso extends Component {
  render() {
    return (
      <div>
        <h2>Concurso: {this.props.nome}</h2>
        <h3>Vagas: {this.props.vagas}</h3>
        <h3>Cargos: {this.props.cargos}</h3>
        <h3>Dificuldade: {this.props.dificuldade}</h3>
      </div>
    );
  }
}

const Acessar = (props) => {
  return (
    <div>
      <a href={props.acesso}>
        <h3>Acessar o Edital</h3>
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div id="fundoPrincipal">
      <h1>Lista de Concursos:</h1>
      <hr />
      <Concursos
        nome="Policial Federal (PF)"
        vagas="1.400"
        cargos="Agente, Escrivão, Delegado e Perito"
        dificuldade="9/10"
        acesso="https://google.com"
      />
      <Concursos
        nome="Policial Rodoviária Federal (PRF)"
        vagas="2.100"
        cargos="Agente"
        dificuldade="8/10"
        acesso="https://google.com"
      />
      <Concursos
        nome="Academia Policial Militar Do Barro Branco (APMBB)"
        vagas="220"
        cargos="Aluno-Oficial"
        dificuldade="6/10"
        acesso="https://google.com"
      />
      <Concursos
        nome="Escola de Sargento das Armas (ESA)"
        vagas="2.400"
        cargos="Recruta"
        dificuldade="6/10"
        acesso="https://google.com"
      />
    </div>
  );
}
