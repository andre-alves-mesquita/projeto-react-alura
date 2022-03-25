import React, { Component } from "react";

class CardNota extends Component {
  render() {
    return (
      <section className="m-3 bg-success p-4 rounded-3">
        <header>
          <h3>{this.props.titulo}</h3>
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
