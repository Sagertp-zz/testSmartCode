import React, { Component } from "react";

class Usuarios extends Component {
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
      fetch("addusuario", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => console.log(res))
        .then((data) => {
          console.log(data);
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
    this.fetchusuario();
  }

  fetchusuario(e) {
    fetch("usuario")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usuarios: data });
        console.log(this.state.usuarios);
      })
      .catch((err) => console.error(err));
  }

  editusuario(id_usuario) {
    fetch(`/usuario/${id_usuario}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].id_usuario),
          this.setState({
            id_usuario: data[0].id_usuario,
            id_tipo_usuario: data[0].id_tipo_usuario,
            nombre: data[0].nombre,
            email: data[0].email,
            pass: data[0].pass,
            _id: data[0].id_usuario,
          });
      })
      .catch((err) => console.error(err));
  }

  delusuario(id_usuario) {
    if (confirm("Se eliminara el Usuario")) {
      fetch(`/usuario/${id_usuario}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Ususairo eliminado" });
          this.fetchusuario();
        })
        .catch((err) => console.error(err));
    }
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
          <div className="col s5">
            <div className="card">
              <div className="card-content">
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
                        placeholder="id_tipo_usuario"
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
                        placeholder="nombre"
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
                        placeholder="email"
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
                        placeholder="pass"
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
          <div className="col s7">
            <table>
              <thead>
                <tr>
                  <th>id_usuario</th>
                  <th>id_tipo_usuario</th>
                  <th>nombre</th>
                  <th>email</th>
                  <th>pass</th>
                </tr>
              </thead>
              <tbody>
                {this.state.usuarios.map((usuarios) => {
                  return (
                    <tr key={usuarios.id_usuario}>
                      <td>{usuarios.id_usuario}</td>
                      <td>{usuarios.id_tipo_usuario}</td>
                      <td>{usuarios.nombre}</td>
                      <td>{usuarios.email}</td>
                      <td>{usuarios.pass}</td>
                      <td>
                        <button
                          className="btn light-blue darken-4"
                          style={{ margin: "4px" }}
                          onClick={() => this.editusuario(usuarios.id_usuario)}
                        >
                          <i className="material-icons">edit</i>
                        </button>
                        <button
                          className="btn light-blue darken-4"
                          style={{ margin: "4px" }}
                          onClick={() => this.delusuario(usuarios.id_usuario)}
                        >
                          <i className="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuarios;
