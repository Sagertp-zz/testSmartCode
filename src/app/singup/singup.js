import React, { Component } from "react";

class Singup extends Component {
  constructor() {
    super();
    this.state = {
      id_usuario: 0,
      id_tipo_usuario: "",
      nombre: "",
      email: "",
      pass: "",
      usuarios: [],
      _id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addusuario = this.addusuario.bind(this);
  }

  addusuario(e) {
    //console.log(this.state);
    if (this.state.id_usuario) {
      fetch(`/usuario/${this.state.id_usuario}`, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Usuario Actualizado" });
          this.setState({
            id_usuario: "",
            id_tipo_usuario: "",
            nombre: "",
            email: "",
            pass: "",
            _id: "",
          });
          this.fetchusuario();
        })
        .catch((err) => console.error(err));
    } else {
      fetch("/singup", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => console.log('prueba'))
        .then((data) => {
          console.log('prueba2');
          M.toast({ html: "Usuario Creado" });
          this.setState({
            id_usuario: 0,
            id_tipo_usuario: "",
            nombre: "",
            email: "",
            pass: "",
          });
          this.fetchusuario();
        })
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  }

  componentDidMount() {
    console.log("Componetne Montado");
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8">
            <div className="card">
              <div className="card-content">
                  <div className="row">
                    <div className="input-field col s12">
                      <p>
                        1: Para Usuario Administrador
                      </p>
                      <p>
                        2: Para Usuario Regular
                      </p>
                    </div>
                  </div>
                <form onSubmit={this.addusuario}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="hidden"
                        name="id_usuario"
                        value={this.state.id_usuario || ""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="id_tipo_usuario"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Tipo_usuario"
                        value={this.state.id_tipo_usuario || ""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="nombre"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Nombre"
                        value={this.state.nombre || ""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="email"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Email"
                        value={this.state.email || ""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="pass"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Password"
                        value={this.state.pass || ""}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn light-blue darken-4">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Singup;
