import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.nome}</h3>
        <a href=".">
          {this.props.curtidas > 1
            ? this.props.curtidas + " Curtidas"
            : this.props.curtidas + " Curtida"}
        </a>
        <spna> | </spna>
        <a href=".">
          {this.props.comentarios > 1
            ? this.props.comentarios + " Comentários"
            : this.props.comentarios + " Cometário"}
        </a>
        <br />
        <br />
        <hr />
      </div>
    );
  }
}

export default Feed;
