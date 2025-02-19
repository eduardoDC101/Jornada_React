import React, { Component } from "react";
import "./style.css";
import Botao from "./components/botao";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musica: "",
    };

    this.sugerir = this.sugerir.bind(this);

    this.musica = [
      "https://youtu.be/PVjiKRfKpPI?si=Z0S59Nc8pts3L1Oj",
      "https://youtu.be/O4irXQhgMqg?si=CAAl3iIauNQy4EIK",
      "https://youtu.be/_TtuN7HGC0Y?si=3txN48f0cX0vUwB5",
      "https://youtu.be/uWBcBEk9T5g?si=mHgeqYiYmJXTu_wi",
      "https://youtu.be/BZhT0x71HoI?si=5ds7yYNA_AOlaBNl",
    ];
  }

  sugerir() {
    let numeroaleatorio = Math.floor(Math.random() * this.musica.length);
    this.setState({ musica: this.musica[numeroaleatorio] });
  }

  render() {
    return (
      <div className="container">
        <div className="fundoImg">
          <img
            src={require("./assets/disk.png")}
            alt="foto_disco"
            className="img"
          />
        </div>
        <Botao nome="Sugerir Música" acaoBtn={this.sugerir} />
        <a
          href={this.state.musica || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="link">{this.state.musica || "Descubra uma Música"}</h3>
        </a>
      </div>
    );
  }
}

export default App;
