import "./Schedule.css";
import React from "react";

class Schedule extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/schedule/");
      const posts = await res.json();
      console.log("dsaf");
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
        <h1>Schedule</h1>
        {this.state.posts.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.contents}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Schedule;
