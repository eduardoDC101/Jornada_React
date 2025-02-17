//import "./App.css";
import React from "react";

/*
const BemVindo = () => <h2>Seja Bem-vindo(a)</h2>;
const Ola = (props) => {
  return (
    <div>
      <h2>
        Olá {props.nome}, sua idade é {props.idade}
      </h2>
    </div>
  );
};

const Mult = (props) => {
  return (
    <h1>
      {props.n1} X {props.n2} = {props.n1 * props.n2}
    </h1>
  );
};

export default function App() {
  return (
    <div id="Back">
      <div id="BackText">
        <h1>Olá Mundo!!!</h1>
        <h3>
          Estou aprendendo a usar <a href="https://react.dev/">React</a>
        </h3>
        <button>React</button>
        <BemVindo />
        <Ola nome="Carlos" idade="29" />
        <Ola nome="Vlad" idade="33" />
        <br />
        <Mult n1="15" n2="5" />
        <Mult n1="15314" n2="5423" />
      </div>
    </div>
  );
}
*/

const Equipe = (props) => {
  return (
    <div id="DadosFuncionario">
      <Funcionario nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Contato linkedin={props.linkedin} />
      <hr />
    </div>
  );
};

const Funcionario = (props) => {
  return (
    <div id="DadosPessoais">
      <h2>Nome: {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
};

const Contato = (props) => {
  return (
    <div id="DadosContato">
      <a href={props.linkedin}>
        <h3>Contato</h3>
      </a>
    </div>
  );
};

export default function App2() {
  return (
    <div id="Principal">
      <h1>Conheça nossa Equipe: </h1>
      <hr />
      <Equipe
        nome="Carlos"
        cargo="Back-End"
        idade="27"
        linkedin="https://google.com"
      />
      <Equipe
        nome="Daniel"
        cargo="Front-End"
        idade="23"
        linkedin="https://google.com"
      />
      <Equipe
        nome="Leonardo"
        cargo="Design"
        idade="31"
        linkedin="https://google.com"
      />
    </div>
  );
}
