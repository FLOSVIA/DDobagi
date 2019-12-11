import "./First.css";
import React, { Component } from "react";

import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

class First extends Component {
  render() {
    return (
      <div className="background">
        <span className="a">
          <b className="hello">Hello</b>, Let's Make{" "}
          <b className="last">Plan</b>!
        </span>
        <Link to="/Main">
          <button>
            <span>Start</span>
          </button>
        </Link>
        <div className="qst">
          <span className="qst">Quick Start</span>
        </div>
      </div>
    );
  }
}

export default First;
