import React, { Component } from "react";
import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="image">
        <BrowserRouter>
          <React.Fragment>
            <span className="h11">Login</span>

            <div className="base">
              <span className="textID">ID</span>
              <div className="id">
                <input type="ID"></input>
              </div>
              <span className="textPW">PASSWORD</span>
              <div className="pswd">
                <input type="password"></input>
              </div>
              <Link to="/Singup">
                <span className="signUp">회원이 아니신가요?</span>
              </Link>
            </div>
            <button className="check">Log In</button>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default Login;
