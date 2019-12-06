import React, { Component } from "react";

import { Link, Router, Route, BrowserRouter, Switch } from "react-router-dom";

class Quick extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <span className="">기존 회원이신가요?</span>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Quick;
