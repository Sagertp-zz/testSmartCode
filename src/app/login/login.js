import React, { Component, useState } from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      pass: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

/*
  fetchticket(e){
    fetch('ticket')
      .then(res => res.json())
      .then(data => {
        this.setState({tickets: data});
        console.log(this.state.tickets);        
      })
      .catch(err => console.error(err));
  }
*/
  login(){
    fetch(`/`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    M.toast({ html: "Usuario" });
    this.setState({
      email: "",
      pass: "",
    });
    e.preventDefault();
  }

  handleChange(e){
    const {name, value} = e.target;
    this.setState( {
      [name]: value,
    });
    console.log(this.state);
  }

  render(e) {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <form onSubmit={this.login}>
              <div className="row">
                <div className="input-field col s12">
                  <input name="email" onChange={this.handleChange} type="text" placeholder="Email" value={this.state.email || ""}/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input name="pass" onChange={this.handleChange} type="text" placeholder="Password" value={this.state.pass || ""}/>
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