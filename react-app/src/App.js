import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Home from "./containers/Mypage";
import Home from "./containers/ScheduleList";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Mypage" component={Mypage} />
          <Route path="/ScheduleList" component={ScheduleList} />
        </div>
      </Router>
    );
  }
}
export default App;
