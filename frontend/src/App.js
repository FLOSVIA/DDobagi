// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

import First from "./component/First/First";
import Main from "./component/Main/Main";
import Quick from "./component/Quick/Quick";
import MyPage from "./component/MyPage/MyPage";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/main" component={Main} />
          <Route path="/first" component={First} />
          <Route path="/quick" component={Quick} />
          <Route path="/myPage" component={MyPage} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
