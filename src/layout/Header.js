import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>TODO</h1>
      <Link to={"/"}>主页</Link> | <Link to={"/about"}>关于</Link>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#00a497",
  textAlign: "center",
  color: "#fff",
};

export default Header;
