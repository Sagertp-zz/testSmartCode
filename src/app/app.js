import React, { Component, useDebugValue } from "react";
import Nav from "./nav/nav";
import Login from "./login/login";
import Singup from "./singup/singup";
import Tickets from "./tickets/tickets";
import Usuarios from "./usuarios/usuarios";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <Singup/>
            <Usuarios/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;