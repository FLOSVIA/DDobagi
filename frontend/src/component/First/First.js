import "./First.css";
import React from "react";

import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

class First extends React.Component {
  render() {
    return (
      <div className="background">
        <BrowserRouter>
          <React.Fragment>
<<<<<<< Updated upstream
            <span className="hi">hello</span>
=======
            <span className="a">hello, let's make plan</span>
            <br></br>
>>>>>>> Stashed changes
            <Link to="/Main">
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
