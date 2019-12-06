import "./First.css";
import React, { Component } from "react";

import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

class First extends Component {
  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <React.Fragment>
            <span className="a">
              <b className="hello">Hello</b>, Let's Make{" "}
              <b className="last">Plan</b>!
            </span>
            <Link to="/Main">
              <button className="check">
                <span>Start</span>
              </button>
            </Link>
            <br></br>
            <Link to="/Quick">
              <span className="qst">Quick Start</span>
            </Link>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default First;
