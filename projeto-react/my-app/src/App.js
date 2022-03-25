import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/";
import ListaDeNotas from "./components/ListaDeNotas/";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="row">
        <div className=" col-md-3 col-sm-12 container p-4 bg-warning">
          <FormularioCadastro
            criarNota={this.criarNota.bind(this)}
          ></FormularioCadastro>
        </div>
        <div className="col-md-9 col-sm-12 d-flex flex-wrap">
          <ListaDeNotas notas={this.state.notas}></ListaDeNotas>
        </div>
      </div>
    );
  }
}

export default App;
