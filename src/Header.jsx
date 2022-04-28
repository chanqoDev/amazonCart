import React from "react";
import "./Header.css";

const Header = ({ itemTitle }) => {
  return (
    <div className="App-header">
      <h1>{itemTitle}</h1>
    </div>
  );
};

export default Header;
