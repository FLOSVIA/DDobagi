// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import calendar from "./container/calendar";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "1111111",
        content: "111111111111111"
      },
      {
        id: 2,
        title: "2222",
        content: "22222222"
      },
      {
        id: 3,
        title: "33",
        content: "333333"
      }
    ]
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      const posts = await res.json();
      console.log(posts);
      this.setState({
        posts
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.posts.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
