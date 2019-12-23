import "./First.css";
import React, { Component } from "react";

import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

class First extends Component {
  render() {
    return (
      <div className="background">
        <div className="all">
          <div className="a">
            <b className="hello">Hello</b>, Let's Make{" "}
            <b className="last">Plan</b>!
          </div>
          <Link to="/Main">
            <button>
              <span>Start</span>
            </button>
          </Link>
          <Link to="/Quick">
            <span className="qst">Quick Start</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default First;
