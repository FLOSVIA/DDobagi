import React from "react";
import * as api from "../server/api";

class Home extends React.Component {
  render() {
    return (
      <div>
        Home<br></br>
        <button onClick={() => api.dd()}>경고</button>
        <br></br>
        <button onClick="nn()">인사</button>
      </div>
    );
  }
}
export default Home;
