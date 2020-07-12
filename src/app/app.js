import React, { Component, useDebugValue} from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Nav from "./nav/nav";
import Login from "./login/login";
import Singup from "./singup/singup";
import Tickets from "./tickets/tickets";
import Usuarios from "./usuarios/usuarios";



class App extends Component {
  render() {
    return(
      <div>
        <Nav/>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/signup" component={Singup}/>
              <Route exact path="/tickets" component={Tickets}/>
              <Route exact path="/usuarios" component={Usuarios}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

/*
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            render={() => {
              return (
                <div>
                  <Nav />
                  <Tickets/>
                </div>
              );
            }}
          ></Route>
        </Router>
        <Router>
          <Route>
          <Route
            path="/inicio"
            render={() => {
              return (
                <div>
                  <Nav />
                  <Tickets />
                </div>
              );
            }}
          ></Route>
          </Route>
        </Router>
      </div>
    );
  }
}
*/
export default App;
