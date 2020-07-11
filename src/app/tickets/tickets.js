import React, { Component } from "react";

class Tickets extends Component {
  constructor() {
    super();
    this.state = {
      id_ticket: 0,
      id_usuario: "",
      ticket_pedido: "",
      tickets: [],
      _id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addticket = this.addticket.bind(this);
  }

  addticket(e) {
    //console.log(this.state);
    if (this.state.id_ticket) {
      fetch(`/ticket/${this.state.id_ticket}`, {
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
          M.toast({ html: "Ticket Actualizado" });
          this.setState({
            id_ticket: "",
            id_usuario: "",
            ticket_pedido: "",
            tickets: [],
            _id: "",
          });
          this.fetchticket();
        })
        .catch((err) => console.error(err));
    } else {
      fetch("addticket", {
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
          M.toast({ html: "Ticket Creado" });
          this.setState({
            id_ticket: 0,
            id_usuario: "",
            ticket_pedido: "",
            tickets: [],
            _id: "",
          });
          this.fetchticket();
        })
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  }

  componentDidMount() {
    console.log("Componetne Montado");
    this.fetchticket();
  }

  fetchticket(e) {
    fetch("ticket")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tickets: data });
        console.log(this.state.tickets);
      })
      .catch((err) => console.error(err));
  }

  editticket(id_ticket) {
    fetch(`/ticket/${id_ticket}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].id_ticket),
          this.setState({
            id_ticket: data[0].id_ticket,
            id_usuario: data[0].id_usuario,
            ticket_pedido: data[0].ticket_pedido,
            _id: data[0].id_ticket,
          });
      })
      .catch((err) => console.error(err));
  }

  delticket(id_ticket) {
    if (confirm("Se eliminara el Ticket")) {
      fetch(`/ticket/${id_ticket}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Ticket eliminado" });
          this.fetchticket();
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
      <div>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addticket}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          type="hidden"
                          name="id_ticket"
                          value={this.state.id_ticket || ""}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          name="id_usuario"
                          onChange={this.handleChange}
                          type="text"
                          placeholder="id_usuario"
                          value={this.state.id_usuario || ""}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          name="ticket_pedido"
                          onChange={this.handleChange}
                          type="text"
                          placeholder="ticket_pedido"
                          value={this.state.ticket_pedido || ""}
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
                    <th>id_ticket</th>
                    <th>id_usuario</th>
                    <th>ticket_pedido</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tickets.map((tickets) => {
                    return (
                      <tr key={tickets.id_usuario}>
                        <td>{tickets.id_ticket}</td>
                        <td>{tickets.id_usuario}</td>
                        <td>{tickets.ticket_pedido}</td>
                        <td>
                          <button
                            className="btn light-blue darken-4"
                            style={{ margin: "4px" }}
                            onClick={() => this.editticket(tickets.id_ticket)}
                          >
                            <i className="material-icons">edit</i>
                          </button>
                          <button
                            className="btn light-blue darken-4"
                            style={{ margin: "4px" }}
                            onClick={() => this.delticket(tickets.id_ticket)}
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
      </div>
    );
  }
}

export default Tickets;
