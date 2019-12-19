import React from "react";
import "./MyPage.css";

class MyPage extends React.Component {
  state = {
    posts: []
  };
  render() {
    return (
      <div className="a">
        <form action="check_shcedule" method="post">
          title <input type="text" name="title" />
          <br></br>
          content <input type="text" name="content" />
          <input type="submit" value="전송" />
        </form>
      </div>
    );
  }
}

export default MyPage;
