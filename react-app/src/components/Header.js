import React from "react";
import { Link } from "react-router";

class Header extends React.Component {
  redner() {
    const loginButton = (
      <li>
        <link to="/login">
          <i className="material-icons">vpn_key</i>
        </link>
      </li>
    );
  }
}
export default Header;
