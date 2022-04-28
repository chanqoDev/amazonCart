import React from "react";
import "./Header.css";

const Header = ({ tech, bob }) => {
  return (
    <div className="App-header">
      <h1>Amazon Cart</h1>
      <h2>{tech[0]}</h2>
      <p> {bob[1]}</p>
    </div>
  );
};

export default Header;
