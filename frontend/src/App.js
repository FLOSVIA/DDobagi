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
          <Route path="/home" component={Home} />
          <Route path="/first" component={First} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
