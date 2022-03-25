import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)}>
        <div className="input mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
        </div>
        <div className="input-group mb-3">
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Escreva sua nota..."
            onChange={this._handleMudancaTexto.bind(this)}
          ></textarea>
        </div>
        <button className="btn btn-primary">Criar Nota</button>
      </form>
    );
  }
}
export default FormularioCadastro;
