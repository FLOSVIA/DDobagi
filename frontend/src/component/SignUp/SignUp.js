import React, { Component } from "react";
import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";
import "./SignUp.css";

class Login extends Component {
  render() {
    return (
      <div className="image">
        <BrowserRouter>
          <React.Fragment>
            <span className="sign">Sign Up</span>

            <div className="base">
              <span className="textID">ID</span>
              <div className="id">
                <input type="ID" />
                <input type="button" value="check" />
              </div>
              <span className="textPW">PASSWORD</span>
              <div className="pswd">
                <input type="password"></input>
              </div>
              <span className="textPW">AGAIN PASSWORD</span>
              <div className="pswd2">
                <input type="password"></input>
              </div>
            </div>
            <button>Sign Up</button>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default Login;
