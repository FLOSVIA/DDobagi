import React from "react";
import "./MyPage.css";

class MyPage extends React.Component {
  state = {
    posts: []
  };
  render() {
    return (
      <div className="background">
        <center>
          <div className="a">
            <h3>2019월 12월 25일</h3>
            <form action="check_shcedule" method="post">
              <input type="text" name="title" placeholder="Title" />
              <br></br>
              <input
                type="text"
                name="content"
                placeholder="오늘 하루 무슨 일이 일어났나요?"
              />
              <input type="submit" value="전송" />
            </form>
          </div>
        </center>
      </div>
    );
  }
}

export default MyPage;
