import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Router } from "react-router-dom";

import Login from "./containers/Login";
import Home from "./containers/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Login/:login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;
