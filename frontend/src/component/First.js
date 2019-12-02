import "./First.css";
import React from "react";

import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";

class First extends React.Component {
  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <React.Fragment>
            <span className="title">hello</span>
            <br></br>
            <Link to="/home">
              <button>
                <span>Login</span>
              </button>
            </Link>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default First;
