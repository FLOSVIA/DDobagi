import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="background">
        <center>
          <span className="jemok">Hello, Let's Make Plan!</span>

          <div className="month12"></div>
          <div className="month1"></div>
        </center>
      </div>
    );
  }
}

export default Main;
