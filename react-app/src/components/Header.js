import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const MenuItem = ({ active, children, to }) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
);

const Header = () => {
  return (
    <div>
      <div className="logo">flossiva</div>
      <div className="menu">
        <MenuItem to={"/"}>홈</MenuItem>
        <MenuItem to={"/Login"}>Login</MenuItem>
        <MenuItem to={"/Mypage"}>Mypage</MenuItem>
        <MenuItem to={"/ScheduleList"}>ScheduleList</MenuItem>
      </div>
    </div>
  );
};

export default Header;
