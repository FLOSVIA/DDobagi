import React from 'react';
import logo from './logo.svg';
import './App.css';

const api = require("server\routes\index.js");

class App extends React.Component {
  render() {
    return (
      api
    );
  }
}

export default App;
    