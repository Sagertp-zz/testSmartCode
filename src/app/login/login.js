import React, { Component, useState } from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      pass: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(e) {
    //console.log(this.state);
    fetch("/signin", {
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
        M.toast({ html: "Welcome" });
        this.setState({
          email: "",
          pass: "",
        });
      })
      .catch((err) => console.error(err));
    e.preventDefault();
  }

  componentDidMount() {
    console.log("Componetne Montado");
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState( {
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.login}>
            <div className="row">
                <div className="input-field col s12">
                  <h3>
                    Login
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input name="email" onChange={this.handleChange} type="text" placeholder="Email" value={this.state.email}/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input name="pass" onChange={this.handleChange} type="text" placeholder="Password" value={this.state.pass}/>
                </div>
              </div>
              <button type="submit" className="btn light-blue darken-4">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;