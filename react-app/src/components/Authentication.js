import React from "react";
import { Link } from "react-router";

Authentication.prototype = {
  mode: React.prototype.bool,
  onLogin: React.prototype.func,
  onRegister: React.prototype.func
};

Authentication.defaultProps = {
  mode: true,
  onLogin: (id, pw) => {
    console.error("login function not defind");
  },
  onRegister: (id, pw) => {
    console.error("register function not defind");
  }
};

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  render() {
    const inputBoxes = (
      <div>
        <div className="input-field col s12 username">
          <label>Username</label>
          <input name="username" type="text" className="validate" />
        </div>
        <div className="input-field col s12">
          <label>Password</label>
          <input name="password" type="password" className="validate" />
        </div>
      </div>
    );

    const loginView = (
      <div>
        <div className="card-content">
          <div className="input-field col s12 username">
            <label>username</label>
            <input name="username" type="text" className="vaildate" />
          </div>
          <div className="input-field col s12">
            <label>password</label>
            <input name="password" type="password" className="vaildate" />
          </div>
          <a className="waves-effect waves-light btn">SUBMIT</a>
        </div>

        <div className="footer">
          <div className="card-content">
            New Here? <Link to="register">create an account</Link>
          </div>
        </div>
      </div>
    );
    const registerView = <div>registerView</div>;

    return (
      <div className="container auth">
        <Link className="logo" to="/">
          MEMOPAD
        </Link>
        <div className="header blue white-text center">
          <div className="card-content">
            {this.props.mode ? "LOGIN" : "REGISTER"}
          </div>
          {this.props.mode ? loginView : registerView}
        </div>
      </div>
    );
  }
}

export default Authentication;
// mode 값을 주어서 true 일때는 Login, false 일떄는 Register 를 보여주게 할것입니다.
