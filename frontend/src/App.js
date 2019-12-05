// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

import First from "./component/First/First";
import Main from "./component/Main/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/main" component={Main} />
          <Route path="/first" component={First} />
          <Route path="/MyPage" component={MyPage} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
