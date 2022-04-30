import React from "react";
import "./App.css";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import { useState } from "react";
import data from "./components/Data";

function App() {
  const [cartItems, setCartItems] = useState(data);
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems items={cartItems} />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
