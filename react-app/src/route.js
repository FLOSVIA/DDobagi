import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Mypage from "./containers/Mypage";
import ScheduleList from "./containers/ScheduleList";

import "./index.css";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Login" component={Login} />
      <Route path="Mypage" component={Mypage} />
      <Route path="ScheduleList" component={ScheduleList} />
    </Route>
  </Router>,
  document.getElementById("root")
);
