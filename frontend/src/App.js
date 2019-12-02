// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

import First from "./component/First";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="home" Component={Home}></Route>
          <Route path="first" Component={First}></Route>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
