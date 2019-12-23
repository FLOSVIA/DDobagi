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
              <input type="text" name="title" placeholder="TITLE" />
              <br></br>
              <textarea
                name="comment"
                cols="50"
                rows="5"
                placeholder="오늘 하루"
              ></textarea>
              <input type="submit" value="전송" />
            </form>
          </div>
        </center>
      </div>
    );
  }
}

export default MyPage;
