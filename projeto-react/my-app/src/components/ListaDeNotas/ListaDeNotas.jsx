import React, { Component } from "react";
import CardNota from "../CardNota";
class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-center bg-danger">
        {this.props.notas.map((nota, index) => {
          return (
            <div key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}></CardNota>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListaDeNotas;
