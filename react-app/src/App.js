import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
export default App;
